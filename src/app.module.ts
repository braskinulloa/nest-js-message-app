import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { Message } from './messages/entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    })
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService],
})
export class AppModule {}
