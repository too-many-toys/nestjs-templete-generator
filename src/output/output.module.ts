import { Module } from "@nestjs/common";
import { OutputController } from "./output.controller";
import { OutputService } from "./output.service";

@Module({
  imports: [],
  controllers: [OutputController],
  providers: [OutputService],
})
export class OutputModule {}
