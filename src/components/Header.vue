<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand >
      <router-link to="/tours" class="name">
        Vue-demo
      </router-link>
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <!-- <b-navbar-nav>
        <b-nav-item href="#home">Home</b-nav-item>
        <b-nav-item href="#news">News</b-nav-item>
      </b-navbar-nav> -->
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em><img src="https://placekitten.com/g/30/30" alt="BV" class="avatar"></em>
          </template>
          <b-dropdown-item @click="logout()">Sign out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menus: [{
        name: 'Home',
        link: 'home'
      },
      {
        name: 'News',
        link: 'news'
      }]
    }
  },
  methods: {
    logout: function () {
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style>
.avatar {
  border-radius: 50%;
}
.name {
  color: white;
}
.name:hover {
  text-decoration: none;
  color: white;
}
</style>
