import { JsonController, Authorized, CurrentUser, Post, Param, HttpCode, Get, Body } from 'routing-controllers'
import { City } from './entities'
import User from '../users/entity'

@JsonController()
export default class CityController {

  @Authorized()
  @Post('/cities')
  @HttpCode(201)
  async createEvent1(
    @CurrentUser() user: User,
    @Body() city: City,
  ) {
    city.user = user
    const entity = await city.save()
    return entity
  }

  @Get('/cities/:id([0-9]+)')
  getEvent(
    @Param('id') id: number
  ) {
    return City.findOneById(id)
  }

  @Get('/cities')
  getEvents() {
    return City.find()
  }
}