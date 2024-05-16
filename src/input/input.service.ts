import { Injectable } from "@nestjs/common";

@Injectable()
export class InputService {
  getInputFile() {
    const fileString = `
      import { createZodDto } from "nestjs-zod";
      import { z } from "nestjs-zod/z";

      const ExampleInputSchema = changeme;

      export class ExampleInputDto extends createZodDto(ExampleInputSchema) {}
    `;

    return {};
  }
}
