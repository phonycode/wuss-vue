<template>
  <div>
    <w-button :fullLine="true">default</w-button>
    <w-button :fullLine="true" @click="handleClick" type="primary">primary</w-button>
    <w-button :fullLine="true" type="warning">warning</w-button>
    <w-button :fullLine="true" type="success">success</w-button>
    <w-button :fullLine="true" type="info">info</w-button>
    <w-button :fullLine="true" type="danger">danger</w-button>
    <w-button size="large">large</w-button>
    <w-button size="large" type="primary">primary</w-button>
    <w-button size="large" type="success">success</w-button>
    <br>
    <w-button >default</w-button>
    <w-button type="primary">primary</w-button>
    <w-button type="success">success</w-button>
    <br>
    <w-button size="mini">mini</w-button>
    <w-button size="mini" type="primary">primary</w-button>
    <w-button size="mini" type="success">success</w-button>
    <br>
    <w-button size="mini" :circle="true">1</w-button>
    <w-button :circle="true" type="primary">2</w-button>
    <w-button size="large" :circle="true" type="success">3</w-button>
    <br>
    <w-button :fullLine="true" :disabled="true">default</w-button>
    <w-button :fullLine="true" @click="handleClick" :disabled="true" type="primary">primary</w-button>
    <w-button :fullLine="true" :disabled="true" type="warning">warning</w-button>
    <w-button :fullLine="true" :disabled="true" type="success">success</w-button>
    <w-button :fullLine="true" :disabled="true" type="info">info</w-button>
    <w-button :fullLine="true" :disabled="true" type="danger">danger</w-button>
    <br>
    <w-button icon="add">default</w-button>
    <w-button icon="add" type="primary">primary</w-button>
    <w-button icon="close" type="danger">danger</w-button>
    <br>
    <w-button icon="add" :circle="true"></w-button>
    <w-button icon="add" :circle="true" type="primary"></w-button>
    <w-button icon="close" :circle="true" type="danger"></w-button>
  </div>
</template>

<script>

export default {
  name: 'buttons',
  methods: {
    handleClick() {}
  }
}
</script>

<style>
</style>
