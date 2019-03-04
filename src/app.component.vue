<template>
<div class="application--wrap">
  <CPUInfo />
</div>
</template>

<script>
import CPUInfo from './components/cpu-info/cpu-info.component.vue';

export default {
  components: {
    CPUInfo,
  },
};
</script>

<style src="vuetify/dist/vuetify.min.css"></style>
<style src="material-icons-base64/index.css"></style>

<style>
html
{
    overflow: auto;
}
</style>
