import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      //conexion a la base de datos
      host:'localhost',
      port:3306,
      username:'root',
      password:'Yarn_123.?Mysql',
      database:'nestdb',
      entities:[__dirname+'/**/*.entity{.ts,.js}'],
      synchronize:true,

    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
