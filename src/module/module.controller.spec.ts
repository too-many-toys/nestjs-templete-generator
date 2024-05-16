// biome-ignore lint: Type 지정이 안됨
import { Test, TestingModule } from "@nestjs/testing";
import { ModuleController } from "./module.controller";
import { ModuleService } from "./module.service";

describe("ModuleController", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ModuleController],
      providers: [ModuleService],
    }).compile();
  });

  describe("getHello", () => {
    it('should return "Hello World!"', () => {
      const moduleController = app.get(ModuleController);
      expect(moduleController.getHello()).toBe("Hello World!");
    });
  });
});
