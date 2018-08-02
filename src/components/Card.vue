<template>
    <div class="card" @click="go(id)">
      <img v-bind:src="image" alt="title" class="image">
      <div class="footer">
        <p>{{title}}</p>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['title', 'price', 'image', 'id'],
  data () {
    return {
    }
  },
  methods: {
    go (id) {
      this.$emit('go', id)
    }
  }
}
</script>
<style>
.card {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 5px 0px #333;
  margin-bottom: 1.5rem;
  position: relative;
  width: 100%;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 10px;
  background: rgba(0,0,0,.5);
  color: white;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  height: 48px;
  cursor: pointer;
}
.card:hover .footer {
 color: #2389b1;
}
.footer p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.image {
  width: 100%;
  height: 200px;
}
</style>
