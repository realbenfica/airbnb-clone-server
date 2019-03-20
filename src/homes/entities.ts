import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany} from 'typeorm'
import User from '../users/entity'
import { MinLength, IsString } from 'class-validator'
import { Location } from '../locations/entities'
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

  @Column('integer', { name: 'location_id', nullable: true })
  locationId: number

  @Column('integer', { name: 'user_id', nullable: true })
  userId: number

  @OneToMany(_ => Comment, comment => comment.home)
  comment: Comment[]

  @ManyToOne(_ => Location, location => location.homes)
  location: Location;

  @ManyToOne(_ => User, user => user.homes)
  user: User
}