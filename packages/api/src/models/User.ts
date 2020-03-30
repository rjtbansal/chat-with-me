import { Table, Column, Model, DataType, AllowNull, Unique } from 'sequelize-typescript';

@Table({
  paranoid: true // will ensure that data doesnt 'actually' get deleted. Will create a deletedAt column
  // if data gets deleted deleteAt column will show deleted date otherwise its null
})
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
