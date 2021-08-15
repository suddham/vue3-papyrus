<template>
  <button class="bg-gray-300 dark:bg-gray-700 p-1 rounded-full text-gray-600 hover:text-white
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
    <span class="sr-only">Switch to light or dark theme</span>
    <SunIcon class="h-6 w-6 hidden" aria-hidden="true"/>

    <MoonIcon class="h-6 w-6" aria-hidden="true" />
  </button>
</template>

<script>
import { SunIcon, MoonIcon } from '@heroicons/vue/outline';

export default {
    components: {
        SunIcon,
        MoonIcon
    }
};
</script>

<style scoped>

</style>
