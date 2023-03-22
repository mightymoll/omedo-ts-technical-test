import { Controller, Delete, Get, Inject, Param } from '@nestjs/common';
import { DrugstoreService } from './drugstore.service';
import { ApiTags } from '@nestjs/swagger';
import { LatlngDrugstoreDto } from './dto/latlng-drugstore.dto';

@ApiTags('Drugstore')
@Controller('/drugstore')
export class DrugstoreController {
  constructor(
    @Inject(DrugstoreService)
    private readonly drugstoreService: DrugstoreService,
  ) {}

  @Get() //TODO, replace unknown by the correct type
  listDrugstores(latlng: LatlngDrugstoreDto): any[] {
    return this.drugstoreService.listDrugstores(latlng);
  }

  // utiliser fonction 'deleteDrugstore' dans la controller
  @Delete('/:drugstoreId')
  deleteDrugstore(@Param('drugstoreId') drugstoreId: number): any[] {
    return this.drugstoreService.deleteDrugstore(drugstoreId);
  }
}
