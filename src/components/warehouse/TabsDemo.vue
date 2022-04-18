<template>
  <div>
    <h1>Tabs 示例</h1>
    <Demo :component="tabs"/>
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import tabs from '../tabsStore/tabs.vue';

export default {
  components: {Demo},
  setup() {
    return {tabs};
  }
};
</script>