import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';
import { User } from './User';
import { Conversation } from './Conversation';

// a table that will join User & Conversations together
// a user can have many conversations, a conversation can have many users (many-to-many)
@Table
export class UserConversation extends Model<UserConversation> {

  /* A user conversation will typically involve a userId and a conversationId*/
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Conversation)
  @Column
  conversationId: number;
}
