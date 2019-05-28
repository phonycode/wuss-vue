<template>
  <div>
    <h3>tabs</h3>
    <h4>导航切换栏</h4>
    <h5>default</h5>
    <w-tabs @change="handle" v-model="activeName">
      <w-tab-pane name='aaa' label="aaa"></w-tab-pane>
      <w-tab-pane name='bbb' label="bbb"></w-tab-pane>
      <w-tab-pane name='ccc' label="ccc"></w-tab-pane>
    </w-tabs>
    {{showAcitve}}
    <w-button @click='changeIndex'>change</w-button>
  </div>
  
</template>
<script>
export default {
  name: 'tabs',
  data() {
    return {
      activeName: 'aaa',
      showAcitve: 'aaa',
    }
  },
  methods: {
    handle(val) {
      this.showAcitve = val
    },
    changeIndex() {
      this.activeName = 'bbb'
    },
  }
}
</script>

