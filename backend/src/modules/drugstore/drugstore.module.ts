import { Module } from '@nestjs/common';
import { DrugstoreController } from './drugstore.controller';
import { DrugstoreService } from './drugstore.service';
import { DrugstoreRepository } from './drugstore.repository';

@Module({
  controllers: [DrugstoreController],
  providers: [DrugstoreService, DrugstoreRepository],
})
export class DrugstoreModule {}
