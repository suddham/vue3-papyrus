<template>
  <Navigation />

  <div class="w-full max-w-screen-xl mx-auto pt-12 lg:flex relative">
<!--    side nav -->

<!--    main content-->
    <router-view/>

<!--    right side -->
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
    components: { Navigation }
};
</script>

<!--<style lang="css">-->
<!--@import url('http://fonts.cdnfonts.com/css/code-saver');-->

<!--*, html, body {-->
<!--  font-family: 'Code Saver', sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  color: #002f3c;-->
<!--}-->

<!--.text-primary {-->
<!--  color: #002f3c-->
<!--}-->

<!--.text-secondary {-->
<!--  color : #faf77d-->
<!--}-->

<!--.text-primary-light {-->
<!--  color: #315866-->
<!--}-->
<!--.text-primary-dark {-->
<!--  color: #002f3c-->
<!--}-->

<!--</style>-->
