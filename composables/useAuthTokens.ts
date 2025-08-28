import type { DataForClient } from '~/composables/useAPI/converter';
import type { EApiRoutes } from '~/composables/useAPI';
import { ELocalStorageKeys } from '~/constants/localStorage'

export default function useAuthTokens() {
  return useLocalStorage<DataForClient<EApiRoutes.LOGIN>>(
    ELocalStorageKeys.AUTH_TOKENS,
    null
  )
}