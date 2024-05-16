import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const ExampleOutputSchema = z.object({
  value: z.string().describe("This is a value"),
});

export class ExampleOutputDto extends createZodDto(ExampleOutputSchema) {}
