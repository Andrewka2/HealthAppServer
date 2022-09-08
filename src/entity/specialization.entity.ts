import { IsNotEmpty } from "class-validator"
import { Column, CreateDateColumn, Entity, ObjectID, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Specializations } from "../interfaces/specializations.interface";

@Entity()
export class SpecializationsEntity implements Specializations {
    @PrimaryGeneratedColumn()
    id: ObjectID

    @Column()
    @IsNotEmpty()
    name: string
    
    @Column()
    @CreateDateColumn()
    createdAt: Date;
    
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}