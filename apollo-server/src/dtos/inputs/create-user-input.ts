import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @Field()
  customerId: string;
  @Field()
  name: string;
  @Field()
  lastName: string;
}
