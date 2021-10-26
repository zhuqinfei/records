import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';


const recordStore={
  recordList:[] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem){
    const record2: RecordItem = clone(record);//深拷贝，经过两次转换变成两个不同地址,但是内容完成一样
    record2.createdAt = new Date().toISOString();
    this.recordList && this.recordList.push(record2);
    recordStore.saveRecords();
  },
}

recordStore.fetchRecords()

export  default recordStore;