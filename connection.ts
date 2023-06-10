import { Sequelize } from "sequelize-typescript";

import { Story} from "./models";
import {Book} from "./book"
import { Chapter } from "./chapter";

const connection = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "dung16122001",
  database: "newdb",
  logging: false,
  models: [Story, Book, Chapter],
});

export default connection;