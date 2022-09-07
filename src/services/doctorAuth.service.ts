import { AppDataSource } from '../database/index';
import { DoctorAuthEntity } from '../entity/doctorAuth.entity';
import { DoctorAuth } from '../interfaces/doctorAuth.interface';

class DoctorAuthService {
  public DoctorAuth = DoctorAuthEntity;
  public async saveDoctorAuth(DoctorAuthObj: DoctorAuth): Promise<any> {

    let DoctorAuthRepository = await AppDataSource.getRepository(DoctorAuthEntity)
    const createdDoctorAuth = await DoctorAuthRepository.save(DoctorAuthObj)
    return createdDoctorAuth;
  }
}

export default DoctorAuthService;