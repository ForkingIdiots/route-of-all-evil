import { AbstractEndpoint } from "./endpoint";

export interface Routing {
  [SEGMENT: string]: Routing | AbstractEndpoint;
}
