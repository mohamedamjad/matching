import { Module } from '@nestjs/common';
import { PhotographerModule } from './photographer/app/photographer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchingModule } from './matching/app/matching.module';
import * as path from 'path';

@Module({
  imports: [
    PhotographerModule,
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'mysecretpassword',
          database: 'postgres',
          autoLoadEntities: true,
          entities: [path.join(__dirname, '**', '*.entity.js')],
          synchronize: true,
        };
      },
    }),
    MatchingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
