<template lang="pug">
.input(:class='{input__focus: focus}')
  .input_wrap
    label {{ label }}
    input(
      :placeholder="placeholder",
      @input="$emit('update:modelValue', $event.target?.value)",
      :value="modelValue",
      @focus="focus = true",
      @blur="focus = false"
    )
  slot
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { computed, ref } from "vue";

const focus = ref<boolean>(false);
defineProps({
  modelValue: { type: String as PropType<string | number | null>, default: "" },
  label: { type: String as PropType<string | null>, default: null },
  placeholder: { type: String as PropType<string | null>, default: null },
  state: {
    type: String as PropType<"active" | "disable" | null>,
    default: null,
  },
});


</script>
<style lang="sass">
.input
  display: flex
  align-items: center
  background: var(--contrast-100)
  border: var(--border-100)
  border-radius: 4px
  transition: all 0.3s ease
  &__focus
    background: var(--contrast-200)
  &_wrap
    display: flex
    flex-direction: column
    width: 100%
    input
      padding: 10px
      color: var(--text-color-200)
      outline: none
      border: none
      background: none
</style>