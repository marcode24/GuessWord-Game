import { IQuestion } from "./question.model";

export interface ITopic {
  name: string;
  description: string;
  image?: string;
  questions: IQuestion[];
  _id?: string;
  createdAt?: Date;
}
