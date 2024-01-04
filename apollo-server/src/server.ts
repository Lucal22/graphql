import 'reflect-metadata';

import path from 'node:path';

import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { TodoResolver } from './resolver/to-do-resolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [TodoResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  const server = new ApolloServer({
    schema,
  });

  server.listen(4000).then((server) => {
    console.log(`Server listening on ${server.url}`);
  });
}
bootstrap();
