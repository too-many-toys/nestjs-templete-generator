import { Controller, Get } from "@nestjs/common";
import type { InputService } from "./input.service";

@Controller("input")
export class InputController {
  constructor(private readonly inputService: InputService) {}

  @Get("/")
  getHello(): string {
    return this.inputService.getInputFile();
  }
}
