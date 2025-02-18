<script lang="ts" setup>
import type { Component } from '~/types/component';

defineProps<{
  optin: string,
  postAction: Component,
}>();

const { email, emailAttrs, errors, meta, optinCookie, submitForm } = useOptinForm();
const { resolveComponent } = useDynamicComponent();
</script>

<template>
  <Transition
    mode="out-in"
    enter-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-500"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <AppFormOptin
      v-if="!optinCookie"
      v-model="email"
      :optin-phrase="optin"
      :email-attrs="emailAttrs"
      :errors="errors"
      :meta="meta"
      :submit-form="submitForm"
    />

    <div v-else-if="optinCookie && postAction.type !== 'standard'">
      <component
        :is="resolveComponent(postAction.type)"
        v-bind="postAction.props"
      />
    </div>

    <p v-else>
      Merci pour votre inscription !
    </p>
  </Transition>
</template>