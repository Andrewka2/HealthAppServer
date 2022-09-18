import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public customId: string;
  
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
