<template>
  <Layout class-prefix="layout">
    <NumberPad  @update:value="onUpdateAmount"  @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"/>
    </div>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'

import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import recordTypeLists from '@/constants/recordTypeLists';
import Tabs from '@/components/Tabs.vue';

@Component(
    {
      components: {Tags, FormItem, Tabs, NumberPad},
      computed:{
        recordList(){
          return this.$store.state.recordList;
        }
      }
    }
)
export default class Money extends Vue {
   get recordList(){
    return this.$store.state.recordList;
  }

  recordTypeList=recordTypeLists;


   record:RecordItem={
    tags:[],notes:'',type:'-',amount:0
  };

   created(){
     this.$store.commit('fetchRecords' )
   }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord(){
    this.$store.commit('createRecord',this.record);
  }
}
</script>


<style lang="scss" scoped>
.layout-content{

}
.notes{
  padding:12px 0;
}

</style>