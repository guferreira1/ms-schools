import { Module } from '@nestjs/common';
import { SchoolsService } from './services/schools.service';
import { SchoolsController } from './controllers/schools.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolRepository } from './repositories/school.repository';

@Module({
  controllers: [SchoolsController],
  providers: [SchoolsService, PrismaService, SchoolRepository],
})
export class SchoolsModule {}
