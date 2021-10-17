<template>
  <Layout class-prefix="layout">
    <NumberPad  @update:value="onUpdateAmount"  @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'

import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component,Watch} from 'vue-property-decorator';

type Record={  //如何在TS中声明一个复杂类型
  tags:string[];
  notes:string;
  type:string;
  amount:number;
}

@Component(
    { components: {Tags, Notes, Types, NumberPad},}
)
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList:Record[]=[];
  record:Record={
    tags:[],notes:'',type:'-',amount:0
  };

  onUpdateTags(value: string[]) {
    this.record.tags=value
  };

  onUpdateNotes(value: string) {
    this.record.notes=value
  };

  onUpdateAmount(value: string) {
    this.record.amount=parseFloat(value);
  };
  saveRecord(){
    const record2=JSON.parse(JSON.stringify(this.record)) //深拷贝，经过两次转换变成两个不同地址,但是内容完成一样
    this.recordList.push(record2)
    console.log(this.recordList)
  }
  @Watch('recordList')
    onRecordListChanged(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

</style>