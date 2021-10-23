//mixins.js
import Vue from 'vue'
import {Component} from 'vue-property-decorator'

//you can declare mixins as ths same style as components
@Component
export class TagHelper extends Vue{
  createTag(){
    const name=window.prompt('请输入标签名')
    if(!name){
      return window.alert('标签名不能为空')
    }
    this.$store.commit('createTag',name);
  }
}

