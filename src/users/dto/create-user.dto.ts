import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "test@test.ru", description: "Уникальный email" })
  @IsString({ message: "Email должен быть строкой" })
  @IsEmail({}, { message: "Email должен быть в формате email" })
  readonly email: string;
  @ApiProperty({ example: "qwerty", description: "Пароль" })
  @IsString({ message: "Пароль должен быть строкой" })
  @Length(4, 26, {
    message: "Пароль должен быть не менее 4 и не более 26 символов",
  })
  readonly password: string;
}
