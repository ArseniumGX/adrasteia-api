import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { SolicitacaoDto } from './dto/solicitacao.dto';
import { AprovacaoDto } from './dto/aprovacao.dto';

@Controller('solicitacao')
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacaoService) {}

  @Post()
  create(@Body() solicitacao: SolicitacaoDto) {
    return this.solicitacaoService.create(solicitacao);
  }

  @Get()
  findAll() {
    return this.solicitacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitacaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() aprovacao: AprovacaoDto) {
    return this.solicitacaoService.update(+id, aprovacao);
  }
}
