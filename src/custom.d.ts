type RecordItem ={  //如何在TS中声明一个复杂类型
  tags:string[];
  notes:string;
  type:string;
  amount:number;
  createdAt:Date | undefined
}