<script lang="ts" setup>
import { socialData, type SocialType } from '~/types/socials';

const props = defineProps<{
  image: string,
  username: string,
  bio: string,
  socials?: Record<SocialType, string>,
}>();

const socials = computed(() => {
  if(!props.socials) return [];

  return Object.keys(props.socials).map((key) => ({
    ...socialData[key as SocialType],
    url: `${socialData[key as SocialType].url}/${props.socials?.[key as SocialType]}`,
  }));
});
</script>

<template>
  <div>
    <Head>
      <Title>@{{ username }}</Title>
      <Meta
        v-if="bio"
        name="description"
        :content="bio"
      />
      <Meta
        property="og:title"
        :content="username"
      />
      <Meta 
        v-if="image"
        name="og:image"
        :content="image"
      />
      <Meta
        v-if="bio"
        property="og:description"
        :content="bio"
      />
    </Head>

    <Avatar :src="image" />
    <h1>@{{ username }}</h1>
    <SocialList :socials="socials" />
    <p
      v-if="bio"
      class="lead"
    >
      {{ bio }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
div {
  @apply space-y-3;

  h1 {
    @apply text-3xl font-bold justify-center text-center;
  }

  img {
    @apply mx-auto;
  }

  p {
    @apply text-center;
  }
}
</style>