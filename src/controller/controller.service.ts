import { Injectable } from "@nestjs/common";

@Injectable()
export class ControllerService {
  getControllerFile(): string {
    return "Hello World!";
  }
}
