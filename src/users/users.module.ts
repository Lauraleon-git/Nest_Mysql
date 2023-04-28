import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import{TypeOrmModule} from '@nestjs/typeorm'
import { User } from './user.entity';
@Module({
  imports:[TypeOrmModule.forFeature([User])],//expecificar q identidad puede cargar inicaial mente sol,o usaremos user
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
