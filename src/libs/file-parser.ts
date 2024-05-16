import * as fs from "node:fs";
import * as path from "node:path";

import { Injectable } from "@nestjs/common";

@Injectable()
class FileChanger {
  protected file: string;

  deleteString(stringToDelete: string): void {
    this.file = this.file.replace(stringToDelete, "");
  }

  changeString(oldString: string, newString: string): string {
    const file = this.file.replace(oldString, newString);

    return file;
  }

  addString(stringToAdd: string): void {}

  insertString(stringToInsert: string, position: number): void {}
}

@Injectable()
export class ModuleFileParser extends FileChanger {
  constructor() {
    super();
    this.file = fs.readFileSync(path.resolve(__dirname, "../../source_codes/app.module.ts"), "utf-8");
  }
}

@Injectable()
export class ControllerFileParser extends FileChanger {
  constructor() {
    super();
    this.file = fs.readFileSync(path.resolve(__dirname, "../../source_codes/app.controller.ts"), "utf-8");
  }
}

@Injectable()
export class ServiceFileParser extends FileChanger {
  constructor() {
    super();
    this.file = fs.readFileSync(path.resolve(__dirname, "../../source_codes/app.service.ts"), "utf-8");
  }
}

@Injectable()
export class InputFileParser extends FileChanger {
  constructor() {
    super();
    this.file = fs.readFileSync(path.resolve(__dirname, "../../source_codes/app.input.ts"), "utf-8");
  }
}

@Injectable()
export class OutputFileParser extends FileChanger {
  constructor() {
    super();
    this.file = fs.readFileSync(path.resolve(__dirname, "../../source_codes/app.output.ts"), "utf-8");
  }
}
