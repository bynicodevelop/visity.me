<script setup lang="ts">
import type { ImageFileAccept } from '~/types/variables';

const props = defineProps<{
    label: string;
    name: string;
    required?: boolean;
    errors?: string[];
    accept?: ImageFileAccept[];
    onChange: (file: File) => void;
}>();

const inputFile = ref<HTMLInputElement | null>(null);
const preview = ref<string | null>(null);
const imagesAccept = computed(() => props.accept?.join(',') ?? 'image/*');

const isFileValid = (file: File): boolean => {
    if (!props.accept || props.accept.length === 0) return true; // Si aucun filtre, on accepte tout
    return props.accept.some(acceptedType => file.type.includes(acceptedType));
};

const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file && isFileValid(file)) {
        preview.value = URL.createObjectURL(file);
        props.onChange(file);
    } else {
        preview.value = null;
    }
};
const onClick = () => {
    inputFile.value?.click();
};
</script>

<template>
  <div>
    <FormLabel
      :label="props.label"
      :name="props.name"
      :required="props.required"
      :errors="props.errors"
    />
    <div class="mt-2 flex items-center gap-x-3">
      <img
        v-if="preview"
        :src="preview"
        alt="Preview"
        class="w-12 h-12 rounded-full object-cover"
      >
      <svg
        v-else
        class="size-12 text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          fill-rule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          clip-rule="evenodd"
        />
      </svg>
      <ButtonPrimary
        label="Change"
        color="secondary"
        size="sm"
        @click.prevent="onClick"
      />
      <input
        ref="inputFile"
        type="file"
        class="hidden"
        :accept="imagesAccept"
        @change="onFileChange"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>