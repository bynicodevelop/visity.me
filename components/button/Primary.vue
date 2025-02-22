<script setup lang="ts">
import type { Color, Size } from '~/types/variables';

const props = defineProps<{
    label: string;
    type?: 'button' | 'submit' | 'reset';
    readOnly?: boolean;
    color?: Color;
    size?: Size;
}>();

const { color } = props;

const buttonColor = computed(() => {
    switch (color) {
        case 'primary':
            return 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white';
        case 'secondary':
            return 'bg-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-gray-300 text-gray-900';
        case 'danger':
            return 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600 text-white';
        case 'warning':
            return 'bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600 text-white';
        case 'success':
            return 'bg-green-600 hover:bg-green-500 focus-visible:outline-green-600 text-white';
        default:
            return 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white';
    }
});

const buttonSize = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'px-2.5 py-1.5 text-sm font-semibold';
        case 'md':
            return 'px-3 py-1.5 text-sm/6 font-semibold';
        case 'lg':
            return 'px-4 py-2 text-base font-semibold';
        default:
            return 'px-3 py-1.5 text-sm/6 font-semibold';
    }
});

</script>

<template>
  <div>
    <button
      :type="type || 'button'"
      :disabled="readOnly || false"
      :class="`${buttonColor} ${buttonSize}`"
    >
      {{ label }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
button {
    @apply block w-full rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;

    &:disabled {
        @apply bg-gray-300 text-gray-500 cursor-not-allowed;
    }
}
</style>