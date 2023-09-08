<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark g-0">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav p-3 mx-2">
                <li class="nav-item mx-3">
                  <router-link class="text-white" to="/">Home</router-link>
                </li>
                <li class="nav-item mx-3">
                  <router-link class="text-white" to="/Product">Product</router-link>
                </li>
                <li class="nav-item mx-3">
                  <router-link to="/Cart"><i class="fas fa-cart-shopping text-white"></i>
                    <span class="badge badge-danger" style="font-size: 8px;">{{ cart.length }}</span>
                </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>




        <router-view></router-view>

    </div>
</template>




<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Nav',
    data() {
      return {
          products:[],
          cart:[],
      }
  },
  created(){
    var cart = this.$store.state.cart;
    this.cart = cart;
  }
}
</script>




<style>
/* .nav-item:hover,
.nav-item-active:hover {
    background:white;
} */
</style>