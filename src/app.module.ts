import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HTTPModule } from './http.module';
import { MailService } from './mail/mail.service';
import { SMTPMailService } from './mail/smtp-mail.service';

@Module({
  imports: [HTTPModule],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: SMTPMailService,
    },
  ],
})
export class AppModule {}
