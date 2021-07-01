import { uuid } from 'vue-uuid';

export class Section {
  constructor(name: string){
    this.id = uuid.v1();
    this.name = name;
    this.status = "new";
    this.instructions = [];
    this.questions = [];
  }
  id:string;
  name:string;
  status:LearningStatus;
  instructions:Instruction[];
  questions:Question[];

}
export interface Question {
  id:string;
  front:string;
  back:string;
}
export interface Instruction {
  id:string;
  header:string;
  body:string;
}
export interface Store{
  sections:Section[]
}
export type LearningStatus = "new"|"learning"|"learnt";