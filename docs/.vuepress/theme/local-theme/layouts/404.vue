<template>
  <div style="margin: auto; width: 60%; padding: 10px">
    <h1>404</h1>
    <img :src="getImg" width="1080" />
    <blockquote>{{ getMsg }}</blockquote>
    <a :href="$site.base" aria-label="go to home"> Respawn </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const msgs = [
  `From the highest peak to the deepest depths, we've searched far and wide and still can't find the page you're looking for!`,
  `From the hellish nether to the barren end, we've searched far and wide and still can't find the page you're looking for!`,
];
const imgs = ["/assets/images/dark.png", "/assets/images/nether.png"];
const chance = Math.floor(Math.random() * msgs.length);
const getImg = imgs[chance];
const getMsg = msgs[chance];
export default defineComponent({
  setup: () => ({
    getMsg,
    getImg,
  }),
});
</script>