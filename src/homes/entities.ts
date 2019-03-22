import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany} from 'typeorm'
import User from '../users/entity'
import { MinLength, IsString } from 'class-validator'
import { Location } from '../locations/entities'
import Comment  from '../comments/entities'

@Entity()
export class Home extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @Column('text',{nullable:true})
  area: string

  @Column('text',{nullable:true})
  description: string

  @Column('text',{nullable:true})
  picture: string

  @Column('text',{nullable:true})
  date: number

  @Column('text')
  price: number

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