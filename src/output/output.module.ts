import { Module } from "@nestjs/common";
import { OutputController } from "./output.controller";
import { OutputService } from "./output.service";
import { OutputFileParser } from "@libs/file-parser";

@Module({
  imports: [],
  controllers: [OutputController],
  providers: [OutputService, OutputFileParser],
})
export class OutputModule {}
