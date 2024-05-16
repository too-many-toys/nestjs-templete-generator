import { Module } from "@nestjs/common";
import { InputController } from "./input.controller";
import { InputService } from "./input.service";
import { InputFileParser } from "@libs/file-parser";

@Module({
  imports: [],
  controllers: [InputController],
  providers: [InputService, InputFileParser],
})
export class InputModule {}
