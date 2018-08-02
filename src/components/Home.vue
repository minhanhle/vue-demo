<template>
  <div class="home">
    <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#ababab" :interval="4000" img-width="1024" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

      <!-- Slides with custom text -->
      <b-carousel-slide v-for="(item, index) in slides" :key="index" v-bind:img-src="item.image">
        <h1>{{item.content}}</h1>
      </b-carousel-slide>
    </b-carousel>
    <div class="title">DANH SÁCH CÁC TOURS DU LỊCH</div>
    <b-container fluid class="list-tours">
      <b-row>
        <b-col cols="6" md="3" v-for="(item, index) in listTours" :key="index">
          <app-card @go="go($event)" :id="item.id" :title="item.name" :image="item.image" :price="item.price"></app-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import slides from '../data/slide.json'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    'appCard': Card
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      slides: slides
    }
  },
  computed: mapGetters(['listTours']),
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    ...mapActions(['addTour', 'deleteTour']),
    go (id) {
      this.$router.push({name: 'detail', params: {id: id}})
    }
  }
}
</script>

<style>
.list-tours {
  padding-top: 0;
}
.title {
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  padding: 2rem;
  color: #2389b1;
}
</style>
