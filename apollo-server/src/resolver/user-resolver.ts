import { User } from '../dtos/models/user-model';
import {
  Query,
  Resolver,
  Mutation,
  Arg,
  FieldResolver,
  Root,
} from 'type-graphql';
import { CreateUserInput } from '../dtos/inputs/create-user-input';
import { Item } from '../dtos/models/Item-model';
import { prisma } from '../prisma';

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User])
  async users() {
    return await prisma.user.findMany();
  }

  @Mutation(() => User)
  async createUser(@Arg('data') data: CreateUserInput) {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        lastName: data.lastName,
      },
    });
    return user;
  }

  @FieldResolver(() => Item)
  async item(@Root() user: User) {
    return {
      name: user.name,
    };
  }
}
