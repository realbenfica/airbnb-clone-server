import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany} from 'typeorm'
import User from '../users/entity'
import { MinLength, IsString } from 'class-validator'
import { City } from '../cities/entities'
import Comment  from '../comments/entities'

@Entity()
export class Home extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  picture: string

  @Column('text')
  price: number

  @MinLength(2)
  @IsString()
  @Column('text')
  description: string

  @Column('integer', { name: 'city_id', nullable: true })
  cityId: number

  @Column('integer', { name: 'user_id', nullable: true })
  userId: number

  @OneToMany(_ => Comment, comment => comment.home)
  comment: Comment[]

  @ManyToOne(_ => City, city => city.homes)
  city: City;

  @ManyToOne(_ => User, user => user.homes)
  user: User
}