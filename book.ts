import { Table, Model, Column, DataType, PrimaryKey } from "sequelize-typescript";

@Table({
  timestamps: false,
  modelName: "Book",
  tableName: "books",
})
export class Book extends Model<Book> {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  storyId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  
}