import { IsString } from 'class-validator';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Item {
  @IsString()
  @Field()
  item: string;
}
