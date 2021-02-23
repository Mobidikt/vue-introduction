<template>
  <div class="hello">
  fire {{ $store.getters.cnt }} tasks
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

