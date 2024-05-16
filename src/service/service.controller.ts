import { Controller, Get } from "@nestjs/common";
import type { ServiceService } from "./service.service";

@Controller("service")
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get("/")
  getHello(): string {
    return this.serviceService.getServiceFile();
  }
}
