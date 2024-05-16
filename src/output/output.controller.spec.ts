// biome-ignore lint: Type 지정이 안됨
import { Test, TestingModule } from "@nestjs/testing";
import { OutputController } from "./output.controller";
import { OutputService } from "./output.service";

describe("OutputController", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [OutputController],
      providers: [OutputService],
    }).compile();
  });

  describe("getHello", () => {
    it('should return "Hello World!"', () => {
      const outputController = app.get(OutputController);
      expect(outputController.getHello()).toBe("Hello World!");
    });
  });
});
