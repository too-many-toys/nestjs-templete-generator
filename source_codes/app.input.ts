import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const ExampleInputSchema = changeme;

export class ExampleInputDto extends createZodDto(ExampleInputSchema) {}
