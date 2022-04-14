<template>
  <div>dialog示例</div>
  <h1>示例一</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x"
          :closeOnClickOverlay="false"
          :ok="fn1"
          :cancel="fn2">
    <template v-slot:title>提示</template>
    <template v-slot:content><div>第一行字</div><div>第二行字</div></template>
  </Dialog>
  <h1>示例二</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import {ref, h} from 'vue';
import {openDialog} from '../../lib/openDialog';

export default {

  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      return false
    }
    const fn2 = () => {}
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {x, toggle, fn1, fn2, showDialog};
  }
};
</script>