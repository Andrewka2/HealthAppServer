import { IsNotEmpty } from "class-validator"
import { Entity, ObjectID, ObjectIdColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { UserData } from "../interfaces/userData.interface"
import { UserEntity } from "./users.entity"

@Entity()
export class UserDataEntity implements UserData {
    @ObjectIdColumn()
    id: ObjectID

    // @OneToOne(() => UserEntity, (user) => user.id)
    // user: ObjectID

    @Column()
    @IsNotEmpty()
    firstName: string

    @Column()
    @IsNotEmpty()
    lastName: string

    @Column()
    Phone: string
    
    @Column()
    Email: string

    @Column()
    @IsNotEmpty()
    AddressCity: string
    
    @Column()
    @IsNotEmpty()
    AddressStreet: string
    
    @Column()
    @IsNotEmpty()
    AddressBuilding: string
    
    @Column()
    @IsNotEmpty()
    AddressAppartment: string
    
    @Column()
    @CreateDateColumn()
    createdAt: Date;
    
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}