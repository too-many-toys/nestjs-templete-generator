import { Module } from "@nestjs/common";
import { ModuleController } from "./module.controller";
import { ModuleService } from "./module.service";

@Module({
  imports: [],
  controllers: [ModuleController],
  providers: [ModuleService],
})
export class ModuleModule {}
