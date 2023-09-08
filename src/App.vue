<template>
  <!-- <h1>App Vue</h1> -->
  <!-- <router-link to="/"><button>Page1</button></router-link>
  <router-link to="/page2"><button>Page2</button></router-link>
  <router-view></router-view> -->

  <master/>
</template>

<script>
import Master from "./layout/Master.vue"

// import router from './routes/index'
export default
  {
  name: 'App',
  components:{
    Master
  }
}
</script>
