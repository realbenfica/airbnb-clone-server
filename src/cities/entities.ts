import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne } from 'typeorm'
import User from '../users/entity'
import {  Home } from '../homes/entities'

@Entity()
export class City extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text',{nullable:true})
  name: string

  @Column('text',{nullable:true})
  description: string

  @Column('text',{nullable:true})
  picture: string

  @Column('text',{nullable:true})
  date: number

  @Column('integer', { name: 'user_id', nullable:true})
  userId: number

  @ManyToOne(_ => User, user => user.cities)
  user: User;

  @OneToMany(_ => Home, home => home.city)
  homes: Home []
}