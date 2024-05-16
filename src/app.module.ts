import { Module } from "@nestjs/common";
import { ServiceModule } from "./service/service.module";
import { ModuleModule } from "./module/module.module";
import { ControllerModule } from "./controller/controller.module";
import { InputModule } from "./input/input.module";
import { OutputModule } from "./output/output.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { envSchema } from "./config/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvVars: false,
      ignoreEnvFile: false,
      envFilePath: [".env", ".env.local"],
      validate: (config) => envSchema.parse(config),
    }),
    ServiceModule,
    ModuleModule,
    ControllerModule,
    InputModule,
    OutputModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          imports: [ConfigModule],
          inject: [ConfigService],
          type: "postgres",
          database: configService.get<string>("DB_NAME"),
          host: configService.get<string>("DB_HOST"),
          port: configService.get<number>("DB_PORT"),
          username: configService.get<string>("DB_USER"),
          password: configService.get<string>("DB_PASSWORD"),
          synchronize: false,
          dropSchema: false,
          logging: false,
        };
      },
    }),
  ],
})
export class AppModule {}
