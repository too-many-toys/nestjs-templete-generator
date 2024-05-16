import { Injectable } from "@nestjs/common";

@Injectable()
export class InputService {
  getInputFile(): string {
    return "Hello World!";
  }
}
