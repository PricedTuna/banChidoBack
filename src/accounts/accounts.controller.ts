import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('accounts')
@UseGuards(AuthGuard)
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  async create(@Body( new ValidationPipe() ) createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get()
  async findAll() {
    return this.accountsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.accountsService.findOne(id);
  }
  
  @Get('account-by-num/:accountNum')
  async findByAccountNumber(@Param('accountNum') accountNum: string) {
    return this.accountsService.findByNumber(accountNum);
  }

  @Get('account-user/:accountNum')
  async findUserByNumAcc(@Param('accountNum') accountNum: string) {
    return this.accountsService.findUserByNumAcc(accountNum);
  }

  @Get('account-by-user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return this.accountsService.findByUserId(userId);
  }
}
