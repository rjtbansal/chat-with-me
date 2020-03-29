import { Table, Column, Model, DataType, AllowNull, Unique } from 'sequelize-typescript';

@Table
export class User extends Model<User> {

  @Column({
    defaultValue: DataType.UUIDV4, // use UUIDV4 as default Value
    primaryKey: true, // make id as primary key
    type: DataType.UUID  //datatype is UUID
  })
  id: string;

  @AllowNull(false) // nulls not allowed
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @AllowNull(false)
  @Unique //  only unique values allowed
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;
}
