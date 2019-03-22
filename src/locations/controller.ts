import { JsonController, Authorized, CurrentUser, Post, Param, HttpCode, Get, Body } from 'routing-controllers'
import { Location } from './entities'
import User from '../users/entity'

@JsonController()
export default class LocationController {

  @Authorized()
  @Post('/locations')
  @HttpCode(201)
  async createLocation1(
    @CurrentUser() user: User,
    @Body() location: Location,
  ) {
    location.user = user
    const entity = await location.save()
    return entity
  }

  @Get('/locations/:id([0-9]+)')
  getLocation(
    @Param('id') id: number
  ) {
    return Location.findOneById(id)
  }

  @Get('/locations')
  getLocations() {
    return Location.find()
  }
}