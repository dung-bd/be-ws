import "reflect-metadata";
import express, { Request, Response } from "express";
import connection from "./connection";
import { Story } from "./models";
import { Book } from "./book";
import { Chapter } from "./chapter";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Welcome to Word Story API 🤟" });
});

app.get("/stories", async (req: Request, res: Response): Promise<Response> => {
  const allStories: Story[] = await Story.findAll();
  return res.status(200).json(allStories);
});

app.get("/stories/:id", async (req: Request, res: Response): Promise<Response> => {
  const {id} = req.params;
  const story : Story | null = await Story.findByPk(id)
  return res.status(200).json(story)
})

app.get("/chapters", async (req: Request, res: Response): Promise<Response> => {
  const allChapters: Chapter[] = await Chapter.findAll();
  return res.status(200).json(allChapters)
})

app.get("/chapters/:id", async (req: Request, res: Response): Promise<Response> => {
  const {id} = req.params;
  const chapter : Chapter | null = await Chapter.findByPk(id)
  return res.status(200).json(chapter)
})

app.get("/books", async (req: Request, res: Response): Promise<Response> => {
  const allBooks: Book[] = await Book.findAll();
  return res.status(200).json(allBooks)
})


const start = async (): Promise<void> => {
  try {
    await connection.sync()
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();