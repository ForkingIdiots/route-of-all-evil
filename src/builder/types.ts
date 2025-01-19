import { Request } from "express";
import { ServerOptions } from "node:https";
import { ListenOptions } from "node:net";

type Heders = Record<string, string>
type HeadersProvider = (params: {
  defaultHeaders: Headers
  request: Request

})
interface CommonConfig<ServerTag extends string = string>{

}

export interface HttpConfig {
  listen: number | string | ListenOptions;
}

interface HttpsConfig extends HttpConfig {
  options: ServerOptions;
}


export interface ServerConfig<ServerTag extends string = string>
extends CommonConfig<ServerTag> {

}
