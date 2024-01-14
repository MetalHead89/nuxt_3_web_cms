type TObjectId =  import('mongoose').ObjectId

type TApiParams = {
  isFullPath?: boolean,
  realm?: 'api',
  path: string
}

type TUser = {
  _id: TObjectId,
  name: string,
  password: string
}

type TAnyObject = {
  [prop: string]: any
}

type fieldError = {
  key: string,
  message: string
}

type TResponseError = {
  statusCode: number,
  data: {
    message: string,
    fieldErrors: fieldError[]
  }
} | Error<any>

type TAccessTokenData = {
  token: string
  expired: number
}

type TUserData = {
  id: number,
  name: string
}

type TUserCredentials = {
  token_data: TAccessTokenData
  user: TUserData
}

interface IFetchService {
  get: (path: TApiParams, params: TAnyObject | undefined) => any,
  post: (path: TApiParams, body?: TAnyObject | undefined) => any
}

interface IApi {
  auth: {
    login: (user: { name: string, password: string }) => Promise<TUserCredentials>,
    refresh: () => Promise<TUserCredentials>
  }
}
