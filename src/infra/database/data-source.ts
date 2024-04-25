import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import 'dotenv/config';

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_DB || 'localhost',
  port: parseInt(process.env.POSTGRES_LOCAL_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['dist/**/*.entity.{js,ts'],
  migrations: [`${__dirname}/**/migration/**/*.{js,ts}`],
  seeds: [`${__dirname}/**/seed/**/*.{js,ts}`],
  factories: [`${__dirname}/**/factory/**/*.{js,ts}`],
  synchronize: false,
  migrationsTableName: 'Migrations',
};

const cliConfig = {
  migrationsDir: `${__dirname}/infra/database/migration`,
};

const dataSource = new DataSource(dataSourceOptions);
Object.assign(dataSourceOptions, { cli: cliConfig });
export default dataSource;
