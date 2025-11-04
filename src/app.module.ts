import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GastosComunesModule } from './gastos-comunes/gastos-comunes.module';
import { RecibosModule } from './recibos/recibos.module';

@Module({
  imports: [GastosComunesModule, RecibosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
