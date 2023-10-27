import { Module } from '@nestjs/common';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';

@Module({
  imports: [SolicitacaoModule],
})
export class AppModule {}
