import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const ExampleOutputSchema = changeme;

export class ExampleOutputDto extends createZodDto(ExampleOutputSchema) {}
