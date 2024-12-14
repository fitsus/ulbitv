import { HttpException } from "@nestjs/common";

export class ValidationException extends HttpException {
  messages;

  constructor(res) {
    super(res, 400);
    this.messages = res;
  }
}
