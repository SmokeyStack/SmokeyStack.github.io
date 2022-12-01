<template>
  <div style="margin: auto; width: 60%; padding: 10px">
    <h1>404</h1>
    <img :src="selectedImage" width="100%" />
    <blockquote>{{ selectedMessage }}</blockquote>
    <a :href="$site.base" aria-label="go to home"> Respawn </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ["/assets/images/dark.png", "/assets/images/nether.png"],
      messages: [
        "From the highest peak to the deepest depths, we've searched far and wide and still can't find the page you're looking for!",
        "From the hellish nether to the barren end, we've searched far and wide and still can't find the page you're looking for!",
      ],
      selectedImage: "",
      selectedMessage: "",
    };
  },
  created() {
    const idx = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[idx];
    this.selectedMessage = this.messages[idx];
  },
};
</script>