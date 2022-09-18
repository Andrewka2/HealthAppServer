import { Entity, Column, Unique, CreateDateColumn, UpdateDateColumn, ObjectIdColumn, ObjectID } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { User } from '../interfaces/users.interface';

@Entity()
@Unique(['email', 'customId'])
export class UserEntity implements User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  customId: string;

  @Column()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
