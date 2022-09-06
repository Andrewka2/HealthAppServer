import { ConnectionOptions, DataSource } from 'typeorm';

const env = process.env.NODE_ENV || 'development';
export const AppDataSource = new DataSource({
  type: 'mongodb',
  url: 'mongodb+srv://health:health@hcluster.jtitjh6.mongodb.net/?retryWrites=true&w=majority',
  host: 'localhost',
  port: 27017,
  synchronize: true,
  logging: false,
  entities: [env === 'production' ? 'build/entity/*{.ts,.js}' : 'src/entity/*{.ts,.js}']
})
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })


const dbConnection: ConnectionOptions = {
  type: 'mongodb',
  url: 'mongodb+srv://health:health@hcluster.jtitjh6.mongodb.net/?retryWrites=true&w=majority',
  host: 'localhost',
  port: 27017,
  synchronize: true,
  logging: false,
  entities: [env === 'production' ? 'build/entity/*{.ts,.js}' : 'src/entity/*{.ts,.js}'],
  // migrations: [env === 'production' ? 'build/migration/*{.ts,.js}' : 'src/migration/*{.ts,.js}'],
  // subscribers: [env === 'production' ? 'build/subscriber/*{.ts,.js}' : 'src/subscriber/*{.ts,.js}'],
  // cli: {
  //   entitiesDir: 'src/entity',
  //   migrationsDir: 'src/migration',
  //   subscribersDir: 'src/subscriber',
  // },
};


export { dbConnection };
