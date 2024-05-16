import { Module } from "@nestjs/common";
import { ServiceController } from "./service.controller";
import { ServiceService } from "./service.service";
import { ServiceFileParser } from "@libs/file-parser";

@Module({
  imports: [],
  controllers: [ServiceController],
  providers: [ServiceService, ServiceFileParser],
})
export class ServiceModule {}
