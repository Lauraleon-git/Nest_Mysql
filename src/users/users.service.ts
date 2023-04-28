import { HttpStatus, Injectable,HttpException  } from '@nestjs/common';
import {InjectRepository} from  '@nestjs/typeorm'
import { User } from './user.entity';
import {Repository} from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository:Repository<User>){}
//crear usuarios
    createUser(user:CreateUserDto){
//en caso de que el usuario exita se cumple la condicion
const userFound=this.userRepository.findOne({
    where:{
        username:user.username
    }
})
if(userFound){
    return new HttpException('User already exists',HttpStatus.CONFLICT)//o 400
}

       const newUser= this.userRepository.create(user)
       return this.userRepository.save(newUser)
    }
    //mostrar usuarios 
getUsers(){
    return this.userRepository.find()

}
//obtener usuario por id 
getUser(id:number){
   return this.userRepository.findOne({
        where:{
            id
        }
    })
}
//eliminado de la base de datos 
deleteUser(id:number){
   return this.userRepository.delete({id});
}

updateUser(id:number,user:UpdateUserDto){
return this.userRepository.update({id},user)
}
}
