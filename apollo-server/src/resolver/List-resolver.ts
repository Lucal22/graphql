import {
  Query,
  Resolver,
  Mutation,
  Arg,
  FieldResolver,
  Root,
} from 'type-graphql';
import { CreateUserInput } from '../dtos/inputs/create-user-input';
import { User } from '../dtos/models/user-model';
import { Item } from '../dtos/models/Item-model';

@Resolver(() => User)
export class ListResolver {
  @Query(() => [User])
  async users() {
    return [];
  }

  @Mutation(() => User)
  async createUser(@Arg('data') data: CreateUserInput) {
    const user = {
      name: data.name,
      lastName: data.lastName,
    };
    return user;
  }

  @FieldResolver(() => Item)
  async item(@Root() user: User) {
    return {
      name: user.name,
    };
  }
}