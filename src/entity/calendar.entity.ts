import { Entity, PrimaryGeneratedColumn, ObjectID, Column, Unique, CreateDateColumn, UpdateDateColumn, ObjectIdColumn  } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class CalendarEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @IsNotEmpty()
  date: string;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  procedure: string;

  @Column()
  @IsNotEmpty()
  emergency: string;

  @Column()
  @IsNotEmpty()
  address: string;

  @Column()
  @IsNotEmpty()
  time: string;

  @Column()
  @IsNotEmpty()
  cabinet: string;

  @Column()
  @IsNotEmpty()
  position: string;

  @Column()
  @IsNotEmpty()
  height: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}