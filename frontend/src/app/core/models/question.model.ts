import { ITopic } from "./topic.model";

export interface IQuestion {
  question: string;
  answer: string;
  topic: ITopic;
  moreInfoURL: string;
  _id?: string;
  createdAt?: Date;
}
