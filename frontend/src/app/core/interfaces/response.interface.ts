import { Category } from "@models/category.model";
import { IQuestion } from "@models/question.model";
import { ITopic } from "@models/topic.model";

export interface IResponseCategory {
  ok: boolean,
  categories: Category[],
  category: Category
  msg?: string,
}

export interface IResponseTopic {
  ok: boolean,
  topics: ITopic[],
  topic: ITopic
  msg?: string,
}

export interface IResponseQuestion {
  ok: boolean,
  questions: IQuestion[],
  question: IQuestion
  msg?: string,
}
