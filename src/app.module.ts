import { Module } from "@nestjs/common";
import { ServiceModule } from "./service/service.module";
import { ModuleModule } from "./module/module.module";
import { ControllerModule } from "./controller/controller.module";
import { InputModule } from "./input/input.module";
import { OutputModule } from "./output/output.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    ServiceModule,
    ModuleModule,
    ControllerModule,
    InputModule,
    OutputModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "1",
      password: "1",
      database: "1",
      synchronize: false,
      dropSchema: false,
      logging: false,
      extra: {
        max: 100,
      },
    }),
  ],
})
export class AppModule {}
