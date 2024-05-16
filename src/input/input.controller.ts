import { Controller, Get } from "@nestjs/common";
import { InputService } from "./input.service";
import { InputFileParser } from "@libs/file-parser";

@Controller("input")
export class InputController {
  constructor(
    private readonly inputService: InputService,
    private readonly parser: InputFileParser,
  ) {}

  @Get("/")
  getHello() {
    return this.parser.changeString("changeme", "teststring");
  }
}
