import { IAnswer } from "./answer.model";
import { IQuestion } from "./question.model";

export interface IResult {
  times: number;
  answers: IAnswer[][];
  question: IQuestion;
}
