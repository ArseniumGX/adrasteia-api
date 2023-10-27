import { PartialType } from '@nestjs/mapped-types';
import { SolicitacaoDto } from './solicitacao.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AprovacaoDto extends PartialType(SolicitacaoDto) {
  @IsString()
  @IsNotEmpty()
  aprovacao: string;

  @IsString()
  @IsOptional()
  observacao?: string;
}
