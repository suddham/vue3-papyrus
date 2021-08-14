<template>
  <Navigation />

  <div class="w-full max-w-screen-xl mx-auto pt-12 lg:flex relative">
<!--    side nav -->

<!--    main content-->
    <div class="bg-white">
      <router-view/>
    </div>

<!--    right side -->
  </div>
</template>

<script>
import Navigation from './components/nav/Navigation';

export default {
    components: { Navigation }
};
</script>

<style lang="scss">
@import url('http://fonts.cdnfonts.com/css/code-saver');

$primary: #faf77d;
$text-color: #002f3c;
$app-bg-light: #fffef8;
$app-bg-dark: $text-color;

*, html, body {
  font-family: 'Code Saver', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
