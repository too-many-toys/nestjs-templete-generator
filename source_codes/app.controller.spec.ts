// biome-ignore lint: Type 지정이 안됨
import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { ExampleService } from "./app.service";

describe("AppController", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [ExampleService],
    }).compile();
  });

  describe("getHello", () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toBe("Hello World!");
    });
  });
});
