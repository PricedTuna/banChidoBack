import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('accounts')
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

  @Get('account-by-user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return this.accountsService.findByUserId(userId);
  }
}
