import { JsonController, Authorized, Post, Param, HttpCode, Get, Body, NotFoundError, Put, CurrentUser } from 'routing-controllers'
import { Home } from './entities'
import User from '../users/entity'

@JsonController()
export default class HomeController {

  @Authorized()
  @Post("/homes")
  @HttpCode(201)
  async createTicket(
    @CurrentUser() user: User,
    @Body() home: Home    
  ) {
      home.user = user
      const entity = await home.save()
      return entity 
  }

  @Get('/homes/:id([0-9]+)')
  getTicket(
    @Param('id') id: number
  ) {
    return Home.findOneById(id)
  }

  @Get('/homes')
  getTickets() {
    return Home.find()
  }

  @Authorized() 
  @Put('/homes/:id')
  async updateTicket(
    @Param('id') id: number,
    @Body() update: Partial<Home>
  ) {
    const home = await Home.findOne({ [id as any]: "id"})
    if (!home) throw new NotFoundError('Cannot find page')
    return Home.merge(home, update).save()
  }
}



