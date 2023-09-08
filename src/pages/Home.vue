<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1 class="mb-2 text-center">Home PAGE VUE</h1>

        <header>

          <!-- Jumbotron -->
          <div class="p-5 text-center bg-light">
            <h1 class="mb-3">ONE - Online_Shop</h1>
            <h4 class="mb-3">Welcome To My Shop</h4>
            <router-link to="/product" class="btn btn-primary mt-5" href="" role="button">Let's Go To Shop</router-link>
          </div>
          <!-- Jumbotron -->
        </header>

        <router-view></router-view>

    </div>
</template>