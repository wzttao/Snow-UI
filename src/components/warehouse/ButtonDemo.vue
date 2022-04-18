<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="firstButton"/>
    <Demo :component="secondButton"/>
    <Demo :component="thirdButton"/>
    <Demo :component="fourthButton"/>
    <Demo :component="fifthButton"/>
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import firstButton from '../buttonStore/firstButton.vue';
import secondButton from '../buttonStore/secondButton.vue';
import thirdButton from '../buttonStore/thirdButton.vue';
import fourthButton from '../buttonStore/fourthButton.vue';
import fifthButton from '../buttonStore/fifthButton.vue';

export default {
  components: {Demo},

  setup() {
    return {firstButton, secondButton, thirdButton, fourthButton, fifthButton};
  }
};
</script>
