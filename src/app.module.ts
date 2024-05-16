import { Module } from "@nestjs/common";
import { ServiceModule } from "./service/service.module";
import { ModuleModule } from "./module/module.module";
import { ControllerModule } from "./controller/controller.module";
import { InputModule } from "./input/input.module";
import { OutputModule } from "./output/output.module";

@Module({
  imports: [ServiceModule, ModuleModule, ControllerModule, InputModule, OutputModule],
})
export class AppModule {}
