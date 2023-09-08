<template>
    <div>
        <Nav></Nav>
        <!-- <h1 class="text-center">Master Template</h1> -->
        </div>
</template>




<script>
import Nav from './Nav.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Master',
    components:{
        Nav,
    }
}
</script>


<style>
*{
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
}
</style>