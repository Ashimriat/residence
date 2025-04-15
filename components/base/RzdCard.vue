<script setup lang="ts">
type Props = {
  orientation?: 'row' | 'column';
  preserveSubcontent?: boolean
};


const {
  orientation,
  preserveSubcontent = true,
} = defineProps<Props>();

const { isMobile } = useDevice();

const direction = computed<'row' | 'column'>(
  () => orientation ?? isMobile ? 'column' : 'row',
);

const slots = useSlots();

const $b = useBEM('RzdCard');
</script>

<template lang="pug">
div(:class="$b([direction])")
  div(
    v-if="preserveSubcontent || slots.subContent"
    :class="$b('subcontent')"
  )
    slot(name="subContent")
  div(
    v-if="slots.content"
    :class="$b('content')"
  )
    slot(name="content")
</template>

<style lang="scss">
.RzdCard {
  @include flex((
    flex-direction: v-bind(direction),
  ));
  background: var(--rzd-card-background, #{vars.$colors-grey});
  min-width: var(--rzd-card-minwidth, none);
  width: var(--rzd-card-width);
  max-width: var(--rzd-card-maxwidth, 876px);
  height: var(--rzd-card-height, 584px);
  max-height: var(--rzd-card-maxheight, unset);
  padding: var(--rzd-card-padding, 8px);
  border-radius: var(--rzd-card-border-radius, #{vars.$br-l});
  box-shadow: var(--rzd-card-boxshadow, #{vars.$shadows-popup});
  &--column {
    justify-content: space-between;
    --cardContentMinHeight: fit-content;
  }
  &__subcontent {
    flex-basis: var(--rzd-card-subcontent-flexbasis, 56%);
  }
  &__content {
    width: var(--rzd-card-content-width, fit-content);
    background: var(--rzd-card-content-background, #{vars.$colors-white});
    border-radius: var(--rzd-card-content-border-radius, #{vars.$br-m});
    overflow: hidden;
    min-height: var(--cardContentMinHeight, 220px);
  }
}

@include mobile {
  .RzdCard {
    --rzd-card-width: 100%;
    --rzd-card-content-width: 100%;
    --rzd-card-subcontent-flexbasis: 45%;
  }
}
</style>
