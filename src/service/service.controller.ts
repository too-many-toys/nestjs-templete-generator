import { Controller, Get } from "@nestjs/common";
import { ServiceService } from "./service.service";

@Controller("service")
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get("/")
  getHello() {
    return this.serviceService.getServiceFile();
  }
}
