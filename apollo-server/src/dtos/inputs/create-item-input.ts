import { IsString } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateItemInput {
  @IsString()
  @Field()
  id: string;

  @IsString()
  @Field()
  itemName: string;
}
