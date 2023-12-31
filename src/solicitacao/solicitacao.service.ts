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

  async update(id: number, data: AprovacaoDto) {
    return await this.prisma.solicitacao.update({
      data,
      where: { id },
    });
  }

  async findAllPending() {
    return await this.prisma.solicitacao.findMany({
      where: { aprovacao: { in: null } },
    });
  }
}
