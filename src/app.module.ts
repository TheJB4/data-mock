import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GastosComunesModule } from './gastos-comunes/gastos-comunes.module';

@Module({
  imports: [GastosComunesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
