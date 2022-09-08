import { IsNotEmpty } from "class-validator"
import { Column, CreateDateColumn, Entity, ObjectID, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { EventData } from "../interfaces/event.interface";

@Entity()
export class EventDataEntity implements EventData {
    @PrimaryGeneratedColumn()
    id: ObjectID

    @Column()
    @IsNotEmpty()
    name: string
    
    @Column()
    @IsNotEmpty()
    type: string
    
    @Column()
    @IsNotEmpty()
    desc: string
    
    @Column()
    @CreateDateColumn()
    createdAt: Date;
    
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}