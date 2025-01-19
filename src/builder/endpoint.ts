import { Routing } from "./routing";

export abstract class AbstractNestedRoute {
  /**@description to enable nested */
  public nest(routing: Routing) {
    return Object.assign(routing, { "": this });
  }
}

export abstract class AbstractEndpoint extends AbstractNestedRoute {
  public abstract execute(params: { request: Request }): Promise<void>;
}
