import { Controller, Get } from '@nestjs/common';
import { ModuloAService } from './modulo-a.service';

@Controller('A')
export class ModuloAController {
    constructor(
        private readonly ModuloAService: ModuloAService
    ) { }

    @Get('modulo-a')
    async getHello(): Promise<string> {
        return await this.ModuloAService.getHello();
    }
}
