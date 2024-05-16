import { Module } from "@nestjs/common";
import { ControllerController } from "./controller.controller";
import { ControllerService } from "./controller.service";
import { ControllerFileParser } from "@libs/file-parser";

@Module({
  imports: [],
  controllers: [ControllerController],
  providers: [ControllerService, ControllerFileParser],
})
export class ControllerModule {}
