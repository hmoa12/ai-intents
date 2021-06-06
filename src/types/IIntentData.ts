export interface IIntentsData {
  id: string;
  name: string;
  description: string;
  trainingData: ITrainingData;
  reply: IExpressionsEntityOrReply;
  isSelected?: boolean | false;
}
export interface ITrainingData {
  expressionCount: number;
  expressions?: (IExpressionsEntityOrReply)[] | null;
}
export interface IExpressionsEntityOrReply {
  id: string;
  text: string;
}