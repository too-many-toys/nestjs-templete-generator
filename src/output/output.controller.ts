import { Controller, Get } from "@nestjs/common";
import type { OutputService } from "./output.service";

@Controller("output")
export class OutputController {
  constructor(private readonly outputService: OutputService) {}

  @Get("/")
  getHello(): string {
    return this.outputService.getOutputFile();
  }
}
