import { getRepository, ObjectID } from 'typeorm';
import bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/users.dto';
import HttpException from '../exceptions/HttpException';
import { User } from '../interfaces/users.interface';
import { UserEntity } from '../entity/users.entity';
import { isEmpty } from '../utils/util';

class UserService {
  public users = UserEntity;

  public async findAllUser(): Promise<User[]> {
    const userRepository = getRepository(this.users);
    const users: User[] = await userRepository.find();
    return users;
  }

  public async findUserById(userId: string): Promise<User> {
    
    const userRepository = getRepository(this.users);
    const findUser: User = await userRepository.findOne({ where: { customId: userId } });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const userRepository = getRepository(this.users);
    const findUser: User = await userRepository.findOne({ where: { email: userData.email } });
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createUserData: User = await userRepository.save({ ...userData, password: hashedPassword });

    return createUserData;
  }

  public async updateUser(userId: string, userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const userRepository = getRepository(this.users);
    const findUser: User = await userRepository.findOne({ where: { customId: userId  } });
    if (!findUser) throw new HttpException(409, "You're not user");

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    await userRepository.update(userId, { ...userData, password: hashedPassword });

    const updateUser: User = await userRepository.findOne({ where: { customId: userId } });
    return updateUser;
  }

  public async deleteUser(userId: string): Promise<User> {
    const userRepository = getRepository(this.users);
    const findUser: User = await userRepository.findOne({ where: { customId: userId } });
    if (!findUser) throw new HttpException(409, "You're not user");

    await userRepository.delete({ customId: userId });
    return findUser;
  }
}

export default UserService;
