import { Module } from "@nestjs/common";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/users/users.model";
import { Post } from "./post.model";
import { FilesModule } from "src/files/files.module";

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [SequelizeModule.forFeature([User, Post]), FilesModule],
})
export class PostModule {}
