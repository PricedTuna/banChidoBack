import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemes/User.scheme';
import { Model } from 'mongoose';
import { LoginUserDto } from './dto/login-user.dto';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  findByMail(correo: string) {
    return this.userModel.findOne({ Correo: correo }).exec();
  }

  findByPassword(password: string) {
    return this.userModel.findOne({ Password: password }).exec();
  }

  login({ correo: Correo, password: Password }: LoginUserDto) {
    return this.userModel.findOne({ Correo: Correo, Password: Password });
  }

  async update(updateUserDto: UpdateUserDto) {
    const user = await this.findOne(updateUserDto.UserId);

    if(!user)
      throw new NotFoundException()

    user.Correo = updateUserDto.Correo;

    return user.save();
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
