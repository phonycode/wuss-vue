<template>
  <div>
    <h3>accordion</h3>
    <h4>手风琴模式</h4>
    <w-accordion @change="handleChange"  v-model="activeValue" accordion>
      <w-accordion-item :title="title" name='a'>eee</w-accordion-item>
      <w-accordion-item :title="title" name='b'>rrr</w-accordion-item>
    </w-accordion>
    <h4>非手风琴模式</h4>
    <w-accordion @change="handleChange" v-model="activeValue2" >
      <w-accordion-item :title="title" name='a'>qqq</w-accordion-item>
      <w-accordion-item :title="title" name='b'>www</w-accordion-item>
    </w-accordion>
    <h4>禁选</h4>
    <w-accordion @change="handleChange" v-model="activeValue3" >
      <w-accordion-item :title="title" disabled name='a'></w-accordion-item>
      <w-accordion-item :title="title" name='b'></w-accordion-item>
    </w-accordion>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeValue: 'a',
      activeValue2: ['a'],
      activeValue3: [],
      title:'123123'
    }
  },
  methods: {
    handleChange() {
      
    }
  }
}
</script>

