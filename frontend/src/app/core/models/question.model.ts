import { ITopic } from "./topic.model";

export interface IQuestion {
  question: string;
  answer: string;
  topic: ITopic;
  _id?: string;
  createdAt?: Date;
}
