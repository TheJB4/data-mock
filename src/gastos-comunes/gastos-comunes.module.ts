import { Module } from '@nestjs/common';
import { GastosComunesController } from './gastos-comunes.controller';
import { GastosComunesService } from './gastos-comunes.service';

@Module({
  controllers: [GastosComunesController],
  providers: [GastosComunesService],
})
export class GastosComunesModule {}

