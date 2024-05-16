import { Module } from "@nestjs/common";
import { ServiceModule } from "./service/service.module";
import { ModuleModule } from "./module/module.module";
import { ControllerModule } from "./controller/controller.module";

@Module({
  imports: [ServiceModule, ModuleModule, ControllerModule],
})
export class AppModule {}
