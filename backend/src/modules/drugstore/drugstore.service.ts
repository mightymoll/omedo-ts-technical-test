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

  /* SUPPRIMER
   * trouver la 'drugstore' dans la repository par le 'drugstoreId'
   * s'il est trouver, supprimer l'entrée dans la repository et console.log une message de confirmation
   * s'il n'est pas trouver, return erreur avec message 
  */

  deleteDrugstore(drugstoreId: number): any[] {
    const record: DrugstoreRepository = this.drugstoreRepository[drugstoreId];
    if (record) {
      delete this.drugstoreRepository[drugstoreId];
      console.log(drugstoreId + ' était supprimer')
      return;
    }
    else {
      throw new Error(drugstoreId + ' n\'était pas trouvé');
    }
  }
}
