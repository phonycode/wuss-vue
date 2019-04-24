<template>
  <div id="app">
    <wuss-button :fullLine="true">default</wuss-button>
    <wuss-button :fullLine="true" @click="handleClick" type="primary">primary</wuss-button>
    <wuss-button :fullLine="true" type="warning">warning</wuss-button>
    <wuss-button :fullLine="true" type="success">success</wuss-button>
    <wuss-button :fullLine="true" type="info">info</wuss-button>
    <wuss-button :fullLine="true" type="danger">danger</wuss-button>
    <wuss-button size="large">large</wuss-button>
    <wuss-button size="large" type="primary">primary</wuss-button>
    <wuss-button size="large" type="success">success</wuss-button>
    <br>
    <wuss-button >default</wuss-button>
    <wuss-button type="primary">primary</wuss-button>
    <wuss-button type="success">success</wuss-button>
    <br>
    <wuss-button size="mini">mini</wuss-button>
    <wuss-button size="mini" type="primary">primary</wuss-button>
    <wuss-button size="mini" type="success">success</wuss-button>
    <br>
    <wuss-button size="mini" :circle="true">1</wuss-button>
    <wuss-button :circle="true" type="primary">2</wuss-button>
    <wuss-button size="large" :circle="true" type="success">3</wuss-button>
    <br>
    <wuss-button :fullLine="true" :disabled="true">default</wuss-button>
    <wuss-button :fullLine="true" @click="handleClick" :disabled="true" type="primary">primary</wuss-button>
    <wuss-button :fullLine="true" :disabled="true" type="warning">warning</wuss-button>
    <wuss-button :fullLine="true" :disabled="true" type="success">success</wuss-button>
    <wuss-button :fullLine="true" :disabled="true" type="info">info</wuss-button>
    <wuss-button :fullLine="true" :disabled="true" type="danger">danger</wuss-button>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    handleClick() {}
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
