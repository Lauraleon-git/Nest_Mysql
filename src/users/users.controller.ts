import { Body, Controller,Post ,Get,Delete,Param,ParseIntPipe, Patch} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {

constructor(private usersService:UsersService){}
//mostrar usuarios
@Get()
getUsers(): Promise<User[]>{//devuelve un arreglo de usurarios
    return this.usersService.getUsers();
}
//mostrar usuario
@Get(':id')
getUser(@Param('id',ParseIntPipe)id:number): Promise<User>{//devuelve un arreglo de usurarios //el parseinpipe nos hace la conversion del id a number
    console.log(id);
    console.log(typeof id);
    
    
    return this.usersService.getUser(id);
}
// crear usuario
@Post()
createUser(@Body() newUser:CreateUserDto){//promese con eso solo nos va devolver un solo usuario  :Promise<User> por el momento lo quitamois 
return this.usersService.createUser(newUser);
}

@Delete(':id')
deleteUser(@Param('id',ParseIntPipe)id:number){
    this.usersService.deleteUser(id)
}
@Patch(':id')
updateUser(@Param('id',ParseIntPipe)id:number,@Body()user:UpdateUserDto){
    return this.usersService.updateUser(id,user)

}
}
