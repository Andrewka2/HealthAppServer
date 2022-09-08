import { AppDataSource } from '../database/index';
import { SpecializationsEntity } from '../entity/specialization.entity';
import { Specializations } from '../interfaces/specializations.interface';

class SpecializationsService {
  public Specializations = SpecializationsEntity;
  public async saveSpecializations(SpecializationsObj: Specializations): Promise<any> {

    let SpecializationsRepository = await AppDataSource.getRepository(SpecializationsEntity)
    const createdSpecializations = await SpecializationsRepository.save(SpecializationsObj)
    return createdSpecializations;
  }
}

export default SpecializationsService;