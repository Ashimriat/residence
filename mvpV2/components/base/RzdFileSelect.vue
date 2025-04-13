<script setup lang="ts">

const filesList = defineModel<File[]>({ required: true });

const $b = useBEM('RzdFileSelect');
</script>

<template lang="pug">
div(:class="$b()")
  PFileUpload
    template(#header="{ chooseCallback, uploadCallback, clearCallback }")
      span
    template(#content)
      div(:class="$b('fileSelector')")
        span
          | Выберите файлы
        | или перетяните их сюда
  div(v-if="filesList.length")

</template>

<style lang="scss">
.RzdFileSelect {
  @include flex-column((gap: vars.$gaps-g4));
  &__fileSelector {
    @include centered-flex;
    border: 1px dashed vars.$colors-beige;
    cursor: pointer;
    min-height: 55px;
    border-radius: vars.$br-s;
    & span {
      color: vars.$colors-beige;
      margin-right: vars.$gaps-g8;
    }
  }
}
</style>
