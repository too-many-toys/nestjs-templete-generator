import { Injectable } from "@nestjs/common";

@Injectable()
export class ModuleService {
  getModuleFile(): string {
    return "Hello World!";
  }
}
