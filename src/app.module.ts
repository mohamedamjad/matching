import { Module } from '@nestjs/common';
import { PhotographerModule } from './photographer/app/photographer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissionModule } from './mission/app/mission.module';
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    PhotographerModule,
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: 'postgres',
          host: process.env.DB_HOSTNAME,
          port: +process.env.DB_PORT,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          autoLoadEntities: true,
          entities: [path.join(__dirname, '**', '*.entity.js')],
          synchronize: true,
        };
      },
    }),
    MissionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
