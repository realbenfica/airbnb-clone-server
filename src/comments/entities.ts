import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { IsString, Length } from "class-validator"
import User from '../users/entity'
import { Home } from "../homes/entities"

@Entity()
export default class Comment extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id?: number

    @IsString()
    @Length(2, 100)
    @Column("text")
    comment: string

    @Column('integer', { name: 'home_id', nullable: true })
    homeId: number

    @ManyToOne(_ => User, user => user.comment)
    user: User

    @ManyToOne(_ => Home, home => home.comment)
    home: Home
}