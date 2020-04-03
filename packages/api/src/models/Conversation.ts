import { Table, Column, DataType, AllowNull, HasMany, BelongsToMany, Model } from "sequelize-typescript";
import { Message } from './Message';
import { User } from './User';
import { UserConversation } from './UserConversation';

@Table({ paranoid: true })
export class Conversation extends Model<Conversation> {

  @Column({
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    type: DataType.UUID
  })
  id: string;

  @AllowNull(false)
  @Column
  name: string;

  /* setting up relationship between conversation and message. A conversation 'has many' messages.
  So messages is an array of type Message */
  @HasMany(() => Message)
  messages: Message[];

  /* a user can be a part of many conversations. So a user BelongsToMany conversations
  Sequelize will create a join table for us holding the foreign keys of the source(User) and target(UserConversation)
  models that we specified.
  */
  @BelongsToMany(() => User, () => UserConversation)
  users: User[];
}
