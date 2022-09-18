import { IsNotEmpty } from "class-validator"
import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Doctor } from "../interfaces/doctor.interface"

@Entity()
export class DoctorEntity implements Doctor {
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    @IsNotEmpty()
    firstName: string

    @Column()
    @IsNotEmpty()
    lastName: string

    @Column()
    workPhone: string
    
    @Column()
    workEmail: string

    @Column()
    @IsNotEmpty()
    workAddressCity: string
    
    @Column()
    @IsNotEmpty()
    workAddressStreet: string
    
    @Column()
    @IsNotEmpty()
    workAddressBuilding: string
    
    @Column()
    @IsNotEmpty()
    workAddressCabinet: string

    
    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}