import { EApiRoutes } from './apiTypes'

export type RequestErrorDetailsParams<T extends EApiRoutes> = {
  [EApiRoutes.LOGIN]: never;
  [EApiRoutes.LOGOUT]: never;
  [EApiRoutes.REFRESH_TOKEN]: never;
  [EApiRoutes.SIGN_UP]: {
    400: {
      signUpIdentifier: string;
    },
  };
  [EApiRoutes.UPDATE_PASSWORD]: never;
  // EVENTS
  [EApiRoutes.GET_ALL_EVENTS]: never;
  [EApiRoutes.CREATE_EVENT]: never;
  [EApiRoutes.GET_EVENT]: never;
  [EApiRoutes.UPDATE_EVENT]: never;
  [EApiRoutes.DELETE_EVENT]: never;
  [EApiRoutes.GET_EVENT_PARTICIPANTS]: never;
  [EApiRoutes.REGISTER_TO_EVENT]: never;
  [EApiRoutes.UNREGISTER_FROM_EVENT]: never;
  [EApiRoutes.DELETE_USER_FROM_EVENT]: never;
  // RATING
  [EApiRoutes.GET_RATING]: never;
  [EApiRoutes.UPDATE_RATING]: never;
  [EApiRoutes.ADD_RATING]: never;
  // USERS
  [EApiRoutes.GET_USER_DATA]: never;
  [EApiRoutes.UPDATE_USER_DATA]: never;
}[T]

type ErrorFormFunc<T> = (...args: T[]) => string

type RouteErrors<T extends EApiRoutes> = {
  [K in keyof RequestErrorDetailsParams<T>]: ErrorFormFunc<RequestErrorDetailsParams<T>[K]>
}

type ErrorsDetails = {
  [K in EApiRoutes]: RouteErrors<K>
}

const ROUTES_ERRORS_DETAILS: ErrorsDetails = {
  [EApiRoutes.LOGIN]: {
    401: () => 'Проверьте корректность логина и пароля',
  },
  [EApiRoutes.SIGN_UP]: {
    400: (params) => `Пользователь с таким ${params.signUpIdentifier} уже существует`,
  }
}

export default function formRequestErrors<
  T extends EApiRoutes,
  P extends RequestErrorDetailsParams<T> | undefined,
  C extends keyof RouteErrors<T> | 500 | undefined
>(
  route: T,
  params: P,
  code: C
): string {
  const routeErrors = ROUTES_ERRORS_DETAILS[route]
  if (code === 500) return 'Ошибка на сервере, попробуйте повторить позже'
  if (!routeErrors || !code) return 'Неизвестная ошибка'
  /** @ts-expect-error */
  const codeParam = params ? params[code] : undefined
  return routeErrors[code](codeParam) ?? 'Необработанная ошибка'
}
