import { TypeOrmModuleOptions } from '@nestjs/typeorm';
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

export default typeormConfig;
