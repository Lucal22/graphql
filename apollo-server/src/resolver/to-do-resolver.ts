import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { CreateUserInput } from '../dtos/inputs/create-user-input';
import { User } from '../dtos/models/user-model';

@Resolver()
export class TodoResolver {
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
}
