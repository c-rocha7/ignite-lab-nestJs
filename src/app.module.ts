import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { HTTPModule } from './infra/http.module';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [HTTPModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
