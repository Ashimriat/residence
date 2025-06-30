import type { UseFetchOptions } from '#app';
import type { DataForApi, DataForClient } from './converter';
import type { EApiRoutes, ApiProvidedData } from './apiTypes';
import type { RequestErrorDetailsParams } from './errors'
import converter from './converter';
import formRequestErrors from './errors';

type RequestBody = Record<string, string> | undefined
type RequestTimings = {
  start: number
  end: number
}

export default async function useAPI<T extends EApiRoutes, P>(
  route: T,
  params?: {
    payload?: MaybeRefOrGetter<DataForApi<T>>,
    options?: UseFetchOptions<P>
    requestErrorsDetails?: RequestErrorDetailsParams<T>
  }
) {
  const method = /(\w+)$/.exec(route)?.[0] as UseFetchOptions<P>['method'];
  let cleanRoute = route.replace(`/${method}`, '');
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of getTypedEntries(toValue(params?.payload)?.inline ?? {})) {
    cleanRoute = cleanRoute.replace(`{${String(key)}}`, value);
  }

  const requestTimings = ref<RequestTimings>({
    start: -1,
    end: -1,
  });
  
  const requestBody = computed<RequestBody>(() => {
    if (!params?.payload) return undefined;
    return converter.convertToApiData((toValue(params?.payload).body ?? {}) as DataForApi<T>) as RequestBody;
  })

  const {
    data,
    error,
    status,
    refresh: sendRequest,
  } = useFetch(cleanRoute, {
    baseURL: '/api/',
    body: requestBody,
    method,
    immediate: false,
    watch: false,
  })

  const isProcessing = ref<boolean>(false);

  const convertedData = computed<DataForClient<T>>(() => {
    if (error.value !== null) return data.value as DataForClient<T>;
    return converter.convertToClientData<T>(data.value as ApiProvidedData[T]) as any;
  })

  async function makeRequest(): Promise<void> {
    await sendRequest()
    await until(isProcessing).not.toBeTruthy()
  }

  function getRequestError(): string {
    return formRequestErrors(
      route,
      params?.requestErrorsDetails,
      error.value?.statusCode as any
    )
  }

  watch(status, async () => {
    if (status.value === 'idle') return;
    if (status.value === 'pending') {
      isProcessing.value = true
      requestTimings.value.start = Date.now();
      return;
    }
    requestTimings.value.end = Date.now();
    const timePassed = requestTimings.value.end - requestTimings.value.start;
    if (timePassed < 1_500) {
      await delay(1_500 - timePassed)
    }
    isProcessing.value = false
  })

  return {
    data: convertedData,
    error,
    isProcessing,
    makeRequest,
    getRequestError,
  }
}

export { EApiRoutes } from './apiTypes'
export type { DataForApi as ApiRequestedPayload }