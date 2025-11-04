import { Controller, Get, Query } from '@nestjs/common';
import { GastosComunesService } from './gastos-comunes.service';

@Controller('gastos-comunes')
export class GastosComunesController {
  constructor(private readonly gastosComunesService: GastosComunesService) {}

  @Get('bienes-servicios')
  getBienesServiciosExpenses() {
    return this.gastosComunesService.getBienesServiciosExpenses();
  }

  @Get('fondos-provisiones/activos')
  getFondosProvisionesData() {
    return this.gastosComunesService.getFondosProvisionesData();
  }

  @Get('fondos-provisiones/finalizados')
  getFondosProvisionesCompleted() {
    return this.gastosComunesService.getFondosProvisionesCompleted();
  }

  @Get('recibos')
  getRecibos(@Query('filter') filter?: string) {
    return this.gastosComunesService.getRecibos(filter);
  }
}

