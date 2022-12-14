import { ITopic } from "./topic.model";

export class Category {
  constructor(
    public name: string,
    public description: string,
    public image: string,
    public status: boolean,
    public createdAt?: Date,
    public topics?: ITopic[],
    public _id?: number,
  ) { }
}
