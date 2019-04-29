<template>
  <div>
    <h3>Button</h3>
    <h4>按钮</h4>
    <h5>ButtonType</h5>
    <w-button >default</w-button>
    <w-button @click="handleClick" type="primary">primary</w-button>
    <w-button type="warning">warning</w-button>
    <w-button type="success">success</w-button>
    <w-button type="info">info</w-button>
    <w-button type="danger">danger</w-button>
    <h5>disabled</h5>
    <w-button :disabled="true">default</w-button>
    <w-button @click="handleClick" :disabled="true" type="primary">primary</w-button>
    <w-button :disabled="true" type="warning">warning</w-button>
    <w-button :disabled="true" type="success">success</w-button>
    <w-button :disabled="true" type="info">info</w-button>
    <w-button :disabled="true" type="danger">danger</w-button>
    <h5>loading</h5>
    <w-button :loading="true">default</w-button>
    <w-button :loading="true" type="primary">primary</w-button>
    <w-button :loading="true" type="warning">warning</w-button>
    <w-button :loading="true" type="success">success</w-button>
    <w-button :loading="true" type="info">info</w-button>
    <w-button :loading="true" type="danger">danger</w-button>
    <h5>dashed</h5>
    <w-button :dashed="true">default</w-button>
    <w-button :dashed="true" type="primary">primary</w-button>
    <w-button :dashed="true" type="warning">warning</w-button>
    <w-button :dashed="true" type="success">success</w-button>
    <w-button :dashed="true" type="info">info</w-button>
    <w-button :dashed="true" type="danger">danger</w-button>
    <h5>icon</h5>
    <w-button icon="add">add</w-button>
    <w-button icon="edit" type="primary">Edit</w-button>
    <w-button icon="close" type="danger">close</w-button>
    <h5>size</h5>
    <h5>large</h5>
    <w-button size="large">large</w-button>
    <w-button size="large" type="primary">primary</w-button>
    <w-button size="large" type="success">success</w-button>
    <h5>default</h5>
    <w-button >default</w-button>
    <w-button type="primary">primary</w-button>
    <w-button type="success">success</w-button>
    <h5>mini</h5>
    <w-button size="mini">mini</w-button>
    <w-button size="mini" type="primary">primary</w-button>
    <w-button size="mini" type="success">success</w-button>
    <h5>inline</h5>
    <w-button :inline="true" >default</w-button>
    <w-button :inline="true" type="primary">primary</w-button>
    <w-button :inline="true" type="success">success</w-button>
    <h5>circle</h5>
    <w-button :inline="true" size="mini" :circle="true">1</w-button>
    <w-button :inline="true" :circle="true" type="primary">2</w-button>
    <w-button :inline="true" size="large" :circle="true" type="success">3</w-button>
    <w-button :inline="true" icon="add" :circle="true"></w-button>
    <w-button :inline="true" icon="add" :circle="true" type="primary"></w-button>
    <w-button :inline="true" icon="close" :circle="true" type="danger"></w-button>
    <br>
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
