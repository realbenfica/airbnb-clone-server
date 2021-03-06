import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne } from 'typeorm'
import User from '../users/entity'
import {  Home } from '../homes/entities'

@Entity()
export class Location extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text',{nullable:true})
  name: string

  @Column('text',{nullable:true})
  picture: string

  @Column('integer', { name: 'user_id', nullable:true})
  userId: number

  @ManyToOne(_ => User, user => user.locations)
  user: User;

  @OneToMany(_ => Home, home => home.location)
  homes: Home []
}