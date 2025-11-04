import { Controller, Get, Query } from '@nestjs/common';
import { RecibosService } from './recibos.service';

@Controller('recibos')
export class RecibosController {
  constructor(private readonly recibosService: RecibosService) {}

  @Get()
  getRecibos(@Query('filter') filter?: string): any {
    return this.recibosService.getRecibos(filter);
  }
}

