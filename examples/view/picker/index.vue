<template>
  <div id="picker">
    <w-button @click="handleClick">展开</w-button>
    123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>
      123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>
      123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>
      123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>123 <br>
    <w-picker :prop="prop" :pickList="pickList" title="选择器" :pickerVisible.sync="visible"></w-picker>
  </div>
</template>

<script>

export default {
  name: 'picker',
  data() {
    return {
      visible: false,
      prop: {
        label:'name',
        value:'value'
      },
      pickList: [
        [
          {
            name:'1',
            value:1,
          },
          {
            name:'2',
            value:2,
          },
          {
            name:'3',
            value:3,
          },
          {
            name:'4',
            value:4,
          },
          {
            name:'5',
            value:5,
          },
          {
            name:'5',
            value:5,
          },
          {
            name:'5',
            value:5,
          },
          {
            name:'5',
            value:5,
          }
        ],
        [
          {
            name:'11',
            value:11,
          },
          {
            name:'21',
            value:21,
          },
          {
            name:'31',
            value:31,
          },
          {
            name:'41',
            value:41,
          },
          {
            name:'51',
            value:51,
          },
          {
            name:'5',
            value:5,
          },
          {
            name:'5',
            value:5,
          },
          {
            name:'5',
            value:5,
          }
        ]
      ]
    }
  },
  methods: {
    handleClick() {
      this.visible = true
    }
  }
}
</script>

<style>
</style>
