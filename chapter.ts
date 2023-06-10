import { Table, Model, Column, DataType, PrimaryKey, Unique } from "sequelize-typescript";

@Table({
  timestamps: false,
  modelName: "Chapter",
  tableName: "chapters",
})
export class Chapter extends Model<Chapter> {
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
  bookId!: string;

  @Unique
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  link!: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contentString!: string;
}