import { Module } from "@nestjs/common";
import { ControllerController } from "./controller.controller";
import { ControllerService } from "./controller.service";

@Module({
  imports: [],
  controllers: [ControllerController],
  providers: [ControllerService],
})
export class ControllerModule {}
