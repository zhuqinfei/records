type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number // 数据类型 object | string
  createdAt?: string  // 类 / 构造函数
}

type Tag={
  id:string
  name:string
}

type TagListModel={
  data:Tag[]    //data做到自己维护
  fetch:()=>Tag[]
  create:(name:string)=>'success' | 'duplicated' //联合类型   //success表示成功，duplicated表示name重复
  update:(id:string,name:string)=>'success' | 'not found' | 'duplicated'
  remove:(id:string)=>boolean
  save:()=>void
}

type RootState={
  recordList:RecordItem[],
  tagList:Tag[],
  currentTag?:Tag
}

interface Window {

  // store不用写类型，因为它会自动推出来的

  // store:{
  //   tagList: Tag[],
  //   createTag: (name: string) => void
  //   removeTag: (id: string) => boolean
  //   updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  //   findTag: (id: string) => Tag
  //   recordList: RecordItem[]
  //   createRecord: (record: RecordItem) => void
  // }
}