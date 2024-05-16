import { Controller, Get } from "@nestjs/common";
import type { ModuleService } from "./module.service";

@Controller("module")
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Get("/")
  getHello(): string {
    return this.moduleService.getModuleFile();
  }
}
