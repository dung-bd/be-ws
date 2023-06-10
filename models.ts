import { Table, Model, Column, DataType, PrimaryKey } from "sequelize-typescript";

@Table({
  timestamps: false,
  modelName: "Story",
  tableName: "stories",
})
export class Story extends Model<Story> {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
  })
  image!: string;

  @Column({
    type: DataType.STRING,
  })
  author!: string;

  @Column({
    type: DataType.STRING,
  })
  summary!: string;

  @Column({
    type: DataType.STRING,
  })
  link!: string;

  @Column({
    type: DataType.STRING,
  })
  path!: string;

  @PrimaryKey
  @Column({
    type: DataType.STRING,
  })
  storage!: string;

  @Column({
    type: DataType.STRING,
  })
  chaptersize!: string;
}