import { Controller, Get } from "@nestjs/common";
import type { ControllerService } from "./controller.service";

@Controller("controller")
export class ControllerController {
  constructor(private readonly controllerService: ControllerService) {}

  @Get("/")
  getHello(): string {
    return this.controllerService.getControllerFile();
  }
}
