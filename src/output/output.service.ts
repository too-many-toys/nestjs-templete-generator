import { Injectable } from "@nestjs/common";

@Injectable()
export class OutputService {
  getOutputFile(): string {
    return "Hello World!";
  }
}
