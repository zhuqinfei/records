import {RecordItem} from '@/custom';
import clone from '@/lib/clone'

const localStorageKeyName = 'recordList';
const recordListModel = {
  data:[] as RecordItem[],
  create(record:RecordItem){
    const record2:RecordItem=clone(record)//深拷贝，经过两次转换变成两个不同地址,但是内容完成一样
    record2.createdAt=new Date()
    this.data.push(record2)
  },
  fetch() {
    this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data
    },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default recordListModel;