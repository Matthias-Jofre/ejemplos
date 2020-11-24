import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '@src/modules/user/entity/user.entity';
import { Vehicle } from '@src/modules/vehicle/entity/vehicle.entity';
import { config } from 'dotenv';
import { readFileSync } from 'fs';

config();

const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ["dist/**/*.entity{.ts,.js}"],
  ssl: { crt: readFileSync('BaltimoreCyberTrustRoot.crt').toString() },
  synchronize: true,
};

// const typeormConfig: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: 'principaldb1.mysql.database.azure.com',
//   port: 3306,
//   username: 'adminDios@principaldb1',
//   password: '5TKg3loDFsa',
//   database: 'new_schema',
//   entities: ["dist/**/*.entity{.ts,.js}"],
//   synchronize: true,
//   ssl: { crt: readFileSync('BaltimoreCyberTrustRoot.crt').toString() },
// };

export default typeormConfig;
