import { Controller, Get } from "@nestjs/common";
import { InputService } from "./input.service";
import { InputFileParser } from "@libs/file-parser";

@Controller("input")
export class InputController {
  constructor(private readonly inputService: InputService) {}

  @Get("/")
  getHello() {
    return {};
  }
}
