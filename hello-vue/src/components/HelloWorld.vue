<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <input type='text' v-model.trim='title'>
    <button @click="addTask">Add Task</button>
    <ul>
      <li v-for="(item,i) in list" v-bind:key="i"  @dblclick='removeTask'> 
      {{item.value}}
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  data(){
    return {
      list:[],
      title: ''
    }
  },
  methods:{
    addTask(){
      this.list.push({value: this.title})
    },
    removeTask(i){
      this.list.splice(i,1);
    }
  },
  
  name: 'HelloWorld',
  props: {
  }
}
</script>

<style scoped>
@import './HelloWorld.css';

</style>
