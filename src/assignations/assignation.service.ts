import { Injectable, getLogger, Logger } from "../deps.ts";

@Injectable()
export class AssignationService {
  private logger: Logger = getLogger();

  hello(): string {
    this.logger.info("o/");
    return "hello world";
  }
}
