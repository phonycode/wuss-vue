<!--
 * @Author: null
 * @Email: 3027704690@qq.com
 * @Date: 2019-08-14 09:41:21
 * @LastEditors: null
 * @LastEditTime: 2019-08-15 15:12:59
 * @Description: 
 * @form: (0 U 0)
 -->
<template>
  <div>
    <h3>addrPicker</h3>
    <h4>地址选择器</h4>
    <h5>default</h5>
    <w-cell-group>
      <w-addr-picker placeholder="选择地址"></w-addr-picker>
    </w-cell-group>
    <h5>设置默认地址</h5>
    <w-cell-group>
    </w-cell-group>
    <h5>支持slot插槽</h5>
    <w-cell-group>
    </w-cell-group>
  </div>
</template>
<script>
export default {
  name: 'addrPicker',
  data() {
    return {
       visible: false,
      prop: {
        label: 'name',
        value: 'value',
        children: 'children'
      },
      chooseList: [1, 21],
    }
  }
}
</script>

