import { Module } from "@nestjs/common";
import { ModuleController } from "./module.controller";
import { ModuleService } from "./module.service";
import { ModuleFileParser } from "@libs/file-parser";

@Module({
  imports: [],
  controllers: [ModuleController],
  providers: [ModuleService, ModuleFileParser],
})
export class ModuleModule {}
