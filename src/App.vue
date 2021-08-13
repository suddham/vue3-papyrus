<template>
  <navigation />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navigation from './components/Navigation';

export default {
    name: 'App',
    components: {
        Navigation,
        HelloWorld
    }
};
</script>

<style></style>
