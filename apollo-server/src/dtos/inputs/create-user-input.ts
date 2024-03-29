import { IsString } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @IsString()
  @Field()
  id: string;

  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  lastName: string;
}
