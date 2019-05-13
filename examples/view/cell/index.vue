<template>
  <div>
    <h3>Cell</h3>
    <h4>列表</h4>
    <h5>default</h5>
    <w-cell-group>
      <w-cell :title="title" :text='text'></w-cell>
    </w-cell-group>
    <br>
    <w-cell-group>
      <w-cell :title="title" :text='text'></w-cell>
      <w-cell :title="title" :text='text'></w-cell>
    </w-cell-group>
    <h5>Multiple</h5>
    <w-cell-group>
      <w-cell multiple :title="title" :text='text'></w-cell>
      <w-cell multiple :title="title" :text='text'></w-cell>
    </w-cell-group>
    <h5>支持slot插槽</h5>
    <w-cell-group>
      <w-cell multiple :title="title" :text='text'></w-cell>
      <w-cell multiple :title="title">
        <span>跳转123</span>
      </w-cell>
    </w-cell-group>
    <h5>disabled （只支持样式，具体事件需要自己声明）</h5>
    <w-cell-group>
      <w-cell disabled multiple :title="title" ></w-cell>
      <w-cell disabled multiple :title="title">
        <span>跳转123</span>
      </w-cell>
    </w-cell-group>
  </div>
</template>
<script>
export default {
  name: 'cellGroup',
  data() {
    return {
      title: '列表',
      text: '内容'
    }
  }
}
</script>

