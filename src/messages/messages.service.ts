import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message-dto';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>
    ) {}

    async getAll() {
        return await this.messageRepository.find(); 
    }

    async createMessage(newMessage: CreateMessageDto) {
        const new_mess = new Message();
        new_mess.message = newMessage.message;
        new_mess.nick = newMessage.nick;
        return this.messageRepository.save(new_mess);
    }

    async updateMessage(id_mess: number, toUpdMessage: CreateMessageDto) {
        const upd_mess = await this.messageRepository.findOne(id_mess);
        upd_mess.nick = toUpdMessage.nick;
        upd_mess.message = toUpdMessage.message;
        return this.messageRepository.save(upd_mess);
    }

    async deleteMessage(id_mess: number) {
        return await this.messageRepository.delete(id_mess);
    }
}
