import { DoctorEntity } from '../entity/doctor.entity';
import { AppDataSource } from '../database/index';
import { Doctor } from '../interfaces/doctor.interface';

class DoctorService {
  public doctor = DoctorEntity;
  public async saveDoctor(doctorObj: Doctor): Promise<any> {

    let doctorRepository = await AppDataSource.getRepository(DoctorEntity)
    const createdDoctor = await doctorRepository.save(doctorObj)
    return createdDoctor;
  }
}

export default DoctorService;
