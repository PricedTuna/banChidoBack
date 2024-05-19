import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemes/User.scheme';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();

    return 'This action adds a new user';
  }

  findAll() {
    return this.userModel.find().exec();

    return `This action returns all users`;
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();

    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, {
        new: true,
      })
      .exec();

    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();

    return `This action removes a #${id} user`;
  }
}
