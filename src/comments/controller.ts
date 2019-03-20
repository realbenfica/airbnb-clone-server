import { JsonController, Get, Body, HttpCode, Post, Authorized, CurrentUser } from "routing-controllers"
import Comment from "./entities"
import User from "../users/entity"

@JsonController()
export default class CommentController {
    @Get("/comments")
    async allComments() {
        const comments = await Comment.find();
        return { comments };
    }

    @Authorized()
    @Post("/comments")
    @HttpCode(201)
    async createComment(
        @CurrentUser() user: User,
        @Body() comment: Comment
    ) {
        comment.user = user
        const entity = await comment.save()
        return entity
    }
}