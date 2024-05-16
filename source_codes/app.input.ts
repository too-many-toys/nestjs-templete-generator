import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const ExampleInputSchema = z.object({
  value: z.string().describe("This is a value"),
});

export class ExampleInputDto extends createZodDto(ExampleInputSchema) {}
