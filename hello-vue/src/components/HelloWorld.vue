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
    <input type='text' :value='title' @input='setTitle($event.target.value)'>
    <button @click="addTask">Add Task</button>
    <ul class='todo-list'>
      <li class='todo' v-for="(item,i) in list" :key="i"  @dblclick='removeTask'> 
      {{item.value}}
      <div class='city__img' :style="{backgroundImage: `url(${item.img})`}" >Capital city: {{item.capital_city}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  computed:{
    ...mapState(['title', 'list'])
  },
  methods:{
    ...mapMutations(['setTitle', 'addTask','removeTask'])
  },
  name: 'HelloWorld',
  props: {
  }
}
</script>

<style scoped>
@import './HelloWorld.css';

</style>
