import { IsNotEmpty } from "class-validator"
import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm"
import { Specializations } from "../interfaces/specializations.interface";

@Entity()
export class SpecializationsEntity implements Specializations {
    @ObjectIdColumn()
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