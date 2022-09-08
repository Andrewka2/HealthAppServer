import { AppDataSource } from "../database";
import { UserDataEntity } from "../entity/userData.entity";
import { UserData } from "../interfaces/userData.interface";

class UserDataService {
  public UserData = UserDataEntity;
  public async saveUserData(UserDataObj: UserData): Promise<any> {

    let UserDataRepository = await AppDataSource.getRepository(UserDataEntity)
    const createdUserData = await UserDataRepository.save(UserDataObj)
    return createdUserData;
  }
}

export default UserDataService;
