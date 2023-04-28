import {Entity,Column,PrimaryGeneratedColumn}from 'typeorm'

@Entity({name:'users'})
export class User{
    @PrimaryGeneratedColumn()
    id:number
    @Column({unique:true})
    username:string
    @Column()
    password:string
    @Column({type:'datetime', default:()=>'CURRENT_TIMESTAMP'})//POR DEFECTO COLOCARA LA FECHA DEL MISMO DIA QUE SE CREA
    createdAt:Date
    @Column({nullable:true})
    authStrategy:String

}