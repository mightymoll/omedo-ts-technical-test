import { Test, TestingModule } from '@nestjs/testing';
import { DrugstoreController } from './drugstore.controller';
import { DrugstoreService } from './drugstore.service';
import { DrugstoreRepository } from './drugstore.repository';
import { CandidateModule } from '../candidates/candidate.module';

describe('DrugstoreController', () => {
  let appController: DrugstoreController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [CandidateModule],
      controllers: [DrugstoreController],
      providers: [DrugstoreService, DrugstoreRepository],
    }).compile();

    appController = app.get<DrugstoreController>(DrugstoreController);
  });

  describe('root', () => {
    it('should return not nullable object', () => {
      expect(
        appController.listDrugstores({ lat: 1.2, lng: 2.2 }),
      ).not.toBeUndefined();
    });
  });
});
