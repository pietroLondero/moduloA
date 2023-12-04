import { Module } from '@nestjs/common';
import { ModuloAService } from './modulo-a.service';
import { ModuloAController } from './modulo-a.controller';

@Module({
  controllers: [ModuloAController],
  providers: [ModuloAService],
  exports: [ModuloAService],
})
export class ModuloAModule { }
