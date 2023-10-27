import { Injectable } from '@nestjs/common';
import { SolicitacaoDto } from './dto/solicitacao.dto';
import { AprovacaoDto } from './dto/aprovacao.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SolicitacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: SolicitacaoDto) {
    return await this.prisma.solicitacao.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.solicitacao.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.solicitacao.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, aprocavao: AprovacaoDto) {
    return this.prisma.solicitacao.update({ data: aprocavao, where: { id } });
  }
}
