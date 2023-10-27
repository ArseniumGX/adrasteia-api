import { PartialType } from '@nestjs/mapped-types';
import { SolicitacaoDto } from './solicitacao.dto';
import {
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class AprovacaoDto extends PartialType(SolicitacaoDto) {
  @IsString({ message: "'aprovacao' deve ser um texto" })
  @IsNotEmpty({ message: "'aprovacao' é obrigatorio" })
  @Matches(/^(aprovado|reprovado)$/i, {
    message: "'aprovacao' aceita apenas os valores 'aprovado' ou 'reprovado'",
  })
  aprovacao: string;

  @ValidateIf((obj, val) => obj.aprovacao.toLowerCase() === 'reprovado')
  @IsString({ message: "'observacao' deve ser um texto" })
  @IsNotEmpty({
    message: "'observacao' é obrigatorio se 'aprovacao' for 'reprovado'",
  })
  @MinLength(10, { message: "'observacao' deve ter no mínimo 10 caracteres" })
  observacao?: string;
}
