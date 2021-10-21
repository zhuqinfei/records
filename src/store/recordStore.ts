import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
let data:RecordItem[] | undefined=undefined

const recordStore={
  fetchRecords() {
    data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return data;
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  },
  recordList:data,
  createRecord: (record: RecordItem) => {
    const record2: RecordItem = clone(record);//深拷贝，经过两次转换变成两个不同地址,但是内容完成一样
    record2.createdAt = new Date();
    data && data.push(record2);
    recordStore.saveRecords();
  },
}

recordStore.fetchRecords()

export  default recordStore;