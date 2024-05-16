// biome-ignore lint: Type 지정이 안됨
import { Test, TestingModule } from "@nestjs/testing";
import { InputController } from "./input.controller";
import { InputService } from "./input.service";

describe("InputController", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [InputController],
      providers: [InputService],
    }).compile();
  });

  describe("getHello", () => {
    it('should return "Hello World!"', () => {
      const inputController = app.get(InputController);
      expect(inputController.getHello()).toBe("Hello World!");
    });
  });
});
