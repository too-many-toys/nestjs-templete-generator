import { Injectable } from "@nestjs/common";

@Injectable()
export class ServiceService {
  getServiceFile(): string {
    return "Hello World!";
  }
}
