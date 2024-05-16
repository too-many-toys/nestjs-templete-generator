// biome-ignore lint: Type 지정이 안됨
import { Test, TestingModule } from "@nestjs/testing";
import { ControllerController } from "./controller.controller";
import { ControllerService } from "./controller.service";

describe("ControllerController", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ControllerController],
      providers: [ControllerService],
    }).compile();
  });

  describe("getHello", () => {
    it('should return "Hello World!"', () => {
      const controllerController = app.get(ControllerController);
      expect(controllerController.getHello()).toBe("Hello World!");
    });
  });
});
