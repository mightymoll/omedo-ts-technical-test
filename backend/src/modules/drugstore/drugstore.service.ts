import { Inject, Injectable } from '@nestjs/common';
import { DrugstoreRepository } from './drugstore.repository';
import { LatlngDrugstoreDto } from './dto/latlng-drugstore.dto';

@Injectable()
export class DrugstoreService {
  constructor(
    @Inject(DrugstoreRepository)
    private readonly drugstoreRepository: DrugstoreRepository,
  ) {}

  //TODO, replace unknown by the correct type
  listDrugstores(latlng: LatlngDrugstoreDto): unknown[] {
    // TODO sort by distance
    return this.drugstoreRepository.listDrugstores();
  }

  deleteDrugstore(drugstoreId: number): void {
    //TODO
  }
}
