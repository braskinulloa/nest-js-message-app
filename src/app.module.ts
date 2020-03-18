import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { Message } from './messages/entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesService } from './messages/messages.service';

@Module({
  imports: [
    // TypeOrmModule.forFeature([Message]),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'messageapp',
      // autoLoadEntities: true,
      entities: [Message],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Message])
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessagesService],
})
export class AppModule {}
