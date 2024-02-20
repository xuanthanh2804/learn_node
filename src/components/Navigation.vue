<template>
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20230617/pngtree-anime-girl-standing-in-front-of-a-big-clock-image_2973927.jpg"
          class="d-block w-100"
          alt="image1.jpg"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cdn.pixabay.com/photo/2023/07/31/13/42/anime-art-8161031_1280.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-anime-character-in-a-street-with-an-open-door-image_2972977.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Navigation", // Use a multi-word name
  // ... other component options
};
</script>

<style scoped>
.carousel-inner {
  height: 300px; /* Set the fixed height for the carousel */
}

.carousel-image {
  object-fit: cover; /* Ensure the image covers the container */
  height: 0%; /* Make the image take the full height of the container */
}
</style>
