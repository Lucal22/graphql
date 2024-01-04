import { IsString } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @IsString()
  @Field()
  customerId: string;

  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  lastName: string;
}
