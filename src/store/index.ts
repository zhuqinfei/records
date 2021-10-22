import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);   //把store绑到Vue.prototype,好使用this.$store

export default new Vuex.Store({
  state: {
    recordList:[] as RecordItem[]
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);//深拷贝，经过两次转换变成两个不同地址,但是内容完成一样
      record2.createdAt = new Date();
      state.recordList.push(record2);
      // @ts-ignore
      this.commit('saveRecords')
    },
    saveRecords(state) {
        window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
  },
});

