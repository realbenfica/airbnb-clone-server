import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { Exclude} from 'class-transformer';
import { MinLength, IsString, IsEmail } from 'class-validator'
import * as bcrypt from 'bcrypt'
import { Location } from '../locations/entities'
import {  Home } from '../homes/entities'
import Comment  from '../comments/entities'

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(2)
  @Column('text')
  firstName: string

  @IsString()
  @MinLength(2)
  @Column('text')
  lastName: string

  @IsEmail()
  @Column('text')
  email: string

  @IsString()
  @MinLength(8)
  @Column('text')
  @Exclude({ toPlainOnly: true })
  password: string

  @OneToMany(_ => Location, location => location.user) 
  locations: Location[]

  @OneToMany(_ => Home, home => home.user) 
  homes: Home[]

  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10)
    this.password = hash
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password)
  }

  @OneToMany(_ => Comment, comment => comment.user)
  comment: Comment[]
}

