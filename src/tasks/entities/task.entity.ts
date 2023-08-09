import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean)
  completed: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;
}
