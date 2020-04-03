import { Table, Column, DataType, AllowNull, ForeignKey, BelongsTo, Model } from "sequelize-typescript";
import { User } from './User';
import { Conversation } from './Conversation';

@Table({ paranoid: true })
export class Message extends Model<Message> {

  @Column({
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    type: DataType.UUID
  })
  id: string;

  @AllowNull(false)
  @Column
  content: string;

  // column of conversation id who sent the msg
  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: string;

  // create one to one relationship. A message belongs to a user
  @BelongsTo(() => User)
  user: User;

  // a message has to have a conversation id. Its a foreign key in Conversation table 
  @ForeignKey(() => Conversation)
  @Column
  conversationId: string;
}
