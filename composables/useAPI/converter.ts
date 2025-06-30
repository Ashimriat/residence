import type {
  ApiRequestedData,
  ApiProvidedData,
} from './apiTypes';
import type { EApiRoutes } from './apiTypes';
import { camelCase, snakeCase } from 'change-case';
import { camelCase as camelCaseKeys, snakeCase as snakeCaseKeys } from 'change-case/keys';

type SnakeToPascalCase<T extends string> = T extends `${infer F}_${infer L}`
  ? `${F}${Capitalize<L>}` : T

type PascalCased<T extends object | undefined> = {
  [k in keyof T as SnakeToPascalCase<string & k>]: T[k] extends object ? PascalCased<T[k]> : T[k]
}

export type DataForClient<T extends EApiRoutes> = {
  [k in EApiRoutes]: PascalCased<ApiProvidedData[k]>
}[T]

export type DataForApi<T extends EApiRoutes> = {
  [k in EApiRoutes]: PascalCased<ApiRequestedData[k]>
}[T]

type ApiBodyData<T extends EApiRoutes> = 
  ApiRequestedData[T] extends { body: infer G }
    ? G
    : undefined
  

class ApiDataConverter {
  convertToClientData<T extends EApiRoutes>(
    data: ApiProvidedData[T]
  ): DataForClient<T> | undefined {
    if (!data) return undefined;
    const res = {} as DataForClient<T>;
    // eslint-disable-next-line no-restricted-syntax
    for (const key of getTypedKeys(data)) {
      /** @ts-ignore */
      const dataPiece = data[key];
      const camelKey = camelCase(key as string);
      if (Array.isArray(data)) {
        /** @ts-ignore */
        res[camelKey] = dataPiece.map((val) => this.convertToClientData(val as ApiProvidedData[T]));
      } else if (typeof dataPiece === 'object') {
        /** @ts-ignore */
        res[camelKey] = camelCaseKeys(dataPiece) as DataForClient<T>;
      } else {
        /** @ts-ignore */
        res[camelKey] = dataPiece;
      }
    }
    return res;
  }

  convertToApiData<T extends EApiRoutes>(
    data: DataForApi<T>
  ): ApiBodyData<T> | undefined {
    if (!Object.keys(data).length) return undefined;
    const res = {} as ApiBodyData<T>;
    // eslint-disable-next-line no-restricted-syntax
    for (const key of getTypedKeys(data)) {
      const dataPiece = data[key];
      const snakeKey = snakeCase(key as string);
      if (Array.isArray(dataPiece)) {
        /** @ts-ignore */
        res[snakeKey] = dataPiece.map((val) => this.convertToApiData(val)) as ApiBodyData<T>;
      } else if (typeof dataPiece === 'object') {
        /** @ts-ignore */
        res[snakeKey] = snakeCaseKeys(dataPiece) as ApiBodyData<T>;
      } else {
        /** @ts-ignore */
        res[snakeKey] = dataPiece;
      }
    }
    return res;
  }
}

export default new ApiDataConverter()