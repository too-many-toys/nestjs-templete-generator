// biome-ignore lint: Type 지정이 안됨
import { Test, TestingModule } from "@nestjs/testing";
import { ServiceController } from "./service.controller";
import { ServiceService } from "./service.service";

describe("ServiceController", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ServiceController],
      providers: [ServiceService],
    }).compile();
  });

  describe("getHello", () => {
    it('should return "Hello World!"', () => {
      const serviceController = app.get(ServiceController);
      expect(serviceController.getHello()).toBe("Hello World!");
    });
  });
});
