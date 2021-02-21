import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitizenRegistartionModule } from './citizen-registartion/citizen-registartion.module';

@Module({
  imports: [CitizenRegistartionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
