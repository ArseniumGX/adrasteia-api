import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class SolicitacaoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  solicitante: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  descricao: string;

  @IsNumber()
  @IsNotEmpty()
  preco: number;
}
