import { Controller, Get, Req, Post, Body, Put, Delete } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';

@Controller('messages')
export class MessagesController {
    @Get()
    findAll(): string {
        return 'This returns all messages';
    }

    @Post()
    create(@Body() createMessageDto: CreateMessageDto): string {
        return 'This creates new message';
    } 

    @Put(':id')
    update(@Body() updateMessage: CreateMessageDto): string {
        return 'This update message';
    }

    @Delete(':id')
    delete(): string {
        return 'This deletes a message';
    }
}
