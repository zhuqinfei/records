const localStorageKeyName = 'tagList';
type Tag={
  id:string
  name:string
}
type TagListMode={
  data:Tag[]    //data做到自己维护
  fetch:()=>Tag[]
  create:(name:string)=>'success' | 'duplicated' //联合类型   //success表示成功，duplicated表示name重复
  save:()=>void
}
const tagListModel:TagListMode = {
  data:[],
  fetch() {
    this.data= JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data
  },
  create(name:string){
    //this.data=[{id='1',name='1'},{id='2',name='2'}] 长这样的
    //通过map()收集所有name,产生一个新的数组
    const names=this.data.map(item=>item.name)
    if(names.indexOf(name)>=0){return 'duplicated'}
    this.data.push({id:name,name:name})
    this.save();
    return 'success'
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default tagListModel;