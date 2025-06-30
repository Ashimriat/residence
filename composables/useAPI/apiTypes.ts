export enum EApiRoutes {
  LOGIN = 'auth/login/post',
  LOGOUT = 'auth/logout/post',
  REFRESH_TOKEN = 'auth/refresh-token/post',
  SIGN_UP = 'auth/sign-up/post',
  UPDATE_PASSWORD = 'auth/password/patch',
  GET_ALL_EVENTS = 'events/get',
  CREATE_EVENT = 'events/post',
  GET_EVENT = 'events/{eventId}/get',
  UPDATE_EVENT = 'events/{eventId}/put',
  DELETE_EVENT= 'events/{eventId}/delete',
  GET_EVENT_PARTICIPANTS = 'events/{eventId}/users/get',
  REGISTER_TO_EVENT = 'events/{eventId}/users/post',
  UNREGISTER_FROM_EVENT = 'events/{eventId}/users/delete',
  DELETE_USER_FROM_EVENT = 'events/{eventId}/users/{userId}/delete',
  GET_RATING = 'events/{eventId}/points/get',
  UPDATE_RATING = 'events/{eventId}/points/put',
  ADD_RATING = 'events/{eventId}/points/post',
  GET_USER_DATA = 'users/get',
  UPDATE_USER_DATA = 'users/put'
}

export type ErrorResponse<T extends object = object> = {
  status_code: number;
  detail: string;
  extra: T;
}

type Unique<T extends object> = T & {
  id: number;
}

type ApiDataWithCreationDate<T extends object> = T & {
  created_at: string;
  updated_at: string;
}

type InlineParamEventId = {
  eventId: number;
}

type InlineParamUserId = {
  userId: number;
}

export type ApiTokensData = {
  access_token: string;
  refresh_token: string;
}

export type ApiRatingPointsData = {
  user_id: number;
  points: number;
}

export type ApiEventUpdatableData = {
  moderator_id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  metro_station: string;
  type: string;
  sub_type: string;
  start_date: string;
  end_date: string;
  is_hidden: boolean;
  subscription_usage: boolean;
  capacity: number;
}

export type ApiEventData = Unique<ApiDataWithCreationDate<ApiEventUpdatableData>>;

export type ApiUserUpdatableData = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  telegram_name: string;
  instagram_name: string;
  description: string;
  is_active: boolean;
}

export type ApiUserData = Unique<
  ApiDataWithCreationDate<
    ApiUserUpdatableData & {
      role_id: number;
    }
  >
>;

export type ApiRequestedData = {
  // AUTH
  [EApiRoutes.LOGIN]: {
    body: {
      email: string;
      password: string;
    };
    inline?: never;
  };
  [EApiRoutes.LOGOUT]: {
    body?: never;
    inline?: never;
  }
  [EApiRoutes.REFRESH_TOKEN]: {
    body: Pick<ApiTokensData, 'refresh_token'>;
    inline?: never;
  };
  [EApiRoutes.SIGN_UP]: {
    body: {
      email: string;
      first_name: string;
      last_name: string;
      password: string;
    };
    inline?: never;
  };
  [EApiRoutes.UPDATE_PASSWORD]: {
    body: {
      old_password: string;
      new_password: string;
    };
    inline?: never;
  };
  // EVENTS
  [EApiRoutes.GET_ALL_EVENTS]: {
    body?: never;
    inline?: never;
  };
  [EApiRoutes.CREATE_EVENT]: {
    body: ApiEventUpdatableData;
    inline?: never;
  };
  [EApiRoutes.GET_EVENT]: {
    body?: never;
    inline: InlineParamEventId;
  };
  [EApiRoutes.UPDATE_EVENT]: {
    body: ApiEventUpdatableData;
    inline: InlineParamEventId;
  };
  [EApiRoutes.DELETE_EVENT]: {
    body?: never;
    inline: InlineParamEventId;
  };
  [EApiRoutes.GET_EVENT_PARTICIPANTS]: {
    body?: never;
    inline: InlineParamEventId;
  };
  [EApiRoutes.REGISTER_TO_EVENT]: {
    body: {
      amount: number;
      return_url: string;
    };
    inline: InlineParamEventId;
  };
  [EApiRoutes.UNREGISTER_FROM_EVENT]: {
    body?: never;
    inline: InlineParamEventId;
  };
  [EApiRoutes.DELETE_USER_FROM_EVENT]: {
    body?: never;
    inline: InlineParamEventId & InlineParamUserId;
  };
  // RATING
  [EApiRoutes.GET_RATING]: {
    body?: never;
    inline: InlineParamEventId;
  };
  [EApiRoutes.UPDATE_RATING]: {
    body: {
      user_points: ApiRatingPointsData[];
    };
    inline: InlineParamEventId;
  };
  [EApiRoutes.ADD_RATING]: {
    body: {
      user_points: ApiRatingPointsData[];
    };
    inline: InlineParamEventId;
  };
  // USERS
  [EApiRoutes.GET_USER_DATA]: {
    body?: never;
    inline?: never;
  }
  [EApiRoutes.UPDATE_USER_DATA]: {
    body: ApiUserUpdatableData;
    inline?: never;
  }
}

export type ApiProvidedData = {
  // AUTH
  [EApiRoutes.LOGIN]: ApiTokensData;
  [EApiRoutes.LOGOUT]: undefined;
  [EApiRoutes.REFRESH_TOKEN]: ApiTokensData;
  [EApiRoutes.SIGN_UP]: ApiUserData;
  [EApiRoutes.UPDATE_PASSWORD]: ApiUserData;
  // EVENTS
  [EApiRoutes.GET_ALL_EVENTS]: ApiEventData[];
  [EApiRoutes.CREATE_EVENT]: ApiEventData;
  [EApiRoutes.GET_EVENT]: ApiEventData;
  [EApiRoutes.UPDATE_EVENT]: ApiEventData;
  [EApiRoutes.DELETE_EVENT]: undefined;
  [EApiRoutes.GET_EVENT_PARTICIPANTS]: ApiUserData;
  [EApiRoutes.REGISTER_TO_EVENT]: {
    payment_url: string;
  };
  [EApiRoutes.UNREGISTER_FROM_EVENT]: undefined;
  [EApiRoutes.DELETE_USER_FROM_EVENT]: undefined;
  // RATING
  [EApiRoutes.GET_RATING]: ApiRatingPointsData[];
  [EApiRoutes.UPDATE_RATING]: undefined;
  [EApiRoutes.ADD_RATING]: undefined;
  // USERS
  [EApiRoutes.GET_USER_DATA]: ApiUserData;
  [EApiRoutes.UPDATE_USER_DATA]: ApiUserData;
}