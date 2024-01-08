import 'reflect-metadata';

import path from 'node:path';

import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolver/user-resolver';
import { ItemResolver } from './resolver/item-resolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UserResolver, ItemResolver],
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
