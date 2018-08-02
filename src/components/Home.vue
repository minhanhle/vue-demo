<template>
  <div class="home">
    <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#ababab" :interval="4000" img-width="1024" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

      <!-- Slides with custom text -->
      <b-carousel-slide v-for="(item, index) in slides" :key="index" v-bind:img-src="item.image">
        <h1>{{item.content}}</h1>
      </b-carousel-slide>
    </b-carousel>
    <div class="row">
      <b-card title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import slides from '../data/slide.json'
import tours from '../data/tours.json'
export default {
  name: 'HomePage',
  data () {
    return {
      slide: 0,
      sliding: null,
      slides: slides,
      tours: tours
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
