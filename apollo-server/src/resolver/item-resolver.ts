import { User } from '../dtos/models/user-model';
import {
  Query,
  Resolver,
  Mutation,
  Arg,
  FieldResolver,
  Root,
} from 'type-graphql';
import { CreateItemInput } from '../dtos/inputs/create-item-input';
import { Item } from '../dtos/models/Item-model';
import { prisma } from '../prisma';

@Resolver(() => Item)
export class ItemResolver {
  @Query(() => [Item])
  async users() {
    return await prisma.item.findMany();
  }

  @Mutation(() => Item)
  async createItem(@Arg('data') data: CreateItemInput) {
    const item = await prisma.item.create({
      data: {
        itemName: data.itemName,
      },
    });
    return item;
  }

  @FieldResolver(() => User)
  async item(@Root() item: Item) {
    return {
      iTemName: item.itemName,
    };
  }
}
