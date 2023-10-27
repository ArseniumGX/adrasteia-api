import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class SolicitacaoDto {
  @IsString({ message: "'solicitante' deve ser em formato texto" })
  @IsNotEmpty({ message: "'solicitante' é obrigatório" })
  @MinLength(3, {
    message: "'solicitante' deve contar no mínimo 3 caracteres ",
  })
  solicitante: string;

  @IsString({ message: "'descricao' deve ser em formato texto" })
  @IsNotEmpty({ message: "'descricao' é obrigatório" })
  @MinLength(3, {
    message: "'descricao' deve contar no mínimo 3 caracteres ",
  })
  descricao: string;

  @IsString({ message: "'preco' deve ser em formato texto" })
  @IsNotEmpty({ message: "'preco' é obrigatório" })
  @Matches(/^R\$ \d{1,3}(\.?\d{3})*(,\d{2})?$/, {
    message: "'preco' deve está no formato R$ 123456,78 ou R$ 123.456,78",
  })
  preco: string;
}
