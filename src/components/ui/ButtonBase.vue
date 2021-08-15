<template>
  <div>
    <router-link
      class="h-7 px-6 rounded text-sm md:text-base font-bold whitespace-no-wrap transition-all
      bg-primary dark:bg-secondary border-2 border-primary dark:border-secondary
      shadow-on-light-surface dark:shadow-on-dark-surface
      button"
      :to="route">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'ButtonBase',
    props: {
        route: {
            type: String,
            required: false,
            default: '/'
        }
    }
};
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
  white-space: nowrap;
  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
  transition: all .05s ease-in;

  &:hover{
    box-shadow: 1px 1px 0 #002f3c;
    transform: translate(2px,2px);
  }
}
</style>
