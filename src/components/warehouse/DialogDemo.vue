<template>
  <div>
    <h1>dialog示例</h1>
    <Demo :component="firstDialog"/>
    <Demo :component="secondDialog"/>
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import firstDialog from '../dialogStore/firstDialog.vue';
import secondDialog from '../dialogStore/secondDiaog.vue';

export default {
  components: {Demo},
  setup() {
    return {firstDialog, secondDialog};
  }
};
</script>