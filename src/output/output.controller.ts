import { Controller, Get } from "@nestjs/common";
import { OutputService } from "./output.service";

@Controller("output")
export class OutputController {
  constructor(private readonly outputService: OutputService) {}

  @Get("/")
  getHello() {
    return this.outputService.getOutputFile();
  }
}
