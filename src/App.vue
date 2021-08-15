<template>
  <Navigation />

  <div class="w-full max-w-screen-xl mx-auto pt-12 lg:grid lg:grid-flow-col relative">
    <!--    side nav -->
    <div>

    </div>
    <!--    main content-->
    <div class="bg-white">
      <router-view/>
    </div>

    <!--    right side -->
    <div>

    </div>

  </div>
</template>

<script>
import Navigation from './components/nav/Navigation';

export default {
    components: { Navigation }
};
</script>

<style lang="scss">
</style>
