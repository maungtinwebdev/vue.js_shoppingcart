<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <loader v-show="isload"/>
        <h1 class="text-center">Product PAGE Vue {{products.length }} and Your choosen list-number is {{ cart.length }}</h1>
        <div class="container" v-show="!isload">
            <div class="row">
                <div class="col-md-4 h-100">
                    <div class="card p-0 m-0">
                        <div class="card-title h-100">Product Name</div>
                        <div class="card-body">
                            <img class="w-100" src="https://s.alicdn.com/@sc04/kf/Hb1a32b2d7f72442e91e78f5243e9b168t.jpg_250x250xz.jpg" alt="Product Image">
                        </div>
                        <div class="card-footer">
                            <span>Price: <small>100$</small></span>
                            <a class="btn btn-dark float-end">Add to cart</a>
                        </div>
                    </div>
                </div>

                <div v-for="p in products" :key="p.id" class="col-md-4 mb-1 h-100">
                    <div class="card p-0 m-0">
                        <div class="card-title h-100">Product Name</div>
                        <div class="card-body">
                            <img class="w-100" :src="p.url">
                        </div>
                        <div class="card-footer">
                            <span>Price: <small>{{p.id}}00$</small></span>
                            <a @click="addtoCart(p)" class="btn btn-dark float-end">Add to cart</a>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-md-4">
                    <div class="card p-0 m-0">
                        <div class="card-title">Product Name</div>
                        <div class="card-body">
                            <img src="https://s.alicdn.com/@sc04/kf/Hb1a32b2d7f72442e91e78f5243e9b168t.jpg_250x250xz.jpg" alt="Product Image">
                        </div>
                        <div class="card-footer">
                            <span>Price: <small>100$</small></span>
                            <a href="" class="btn btn-dark float-end">Add to cart</a>
                        </div>
                    </div>
                </div> -->

            </div>
        </div>
    </div>
</template>




<script>
// import Master from '../layout/Master'
import loader from '../components/loader.vue'
import axios from 'axios'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Product',
    components:{
        loader
    },
    data() {
        return {
            isload:true,
            products:[],
            cart:[],
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{
            // res.data.forEach(res.data => {
            //     if(this.products.length<10) {
            //         this.products.push(res.data)
            //     };
                
            // });

        
            const pageData = res.data.slice(0,15);
            this.products=pageData,
            console.log(this.products)
            this.isload=false
        });
    },
    methods:{
        addtoCart(p) {
            
            var cart = this.$store.state.cart;
            var isinCart = cart.find((v)=>{
                return v.title == p.title
            });
            if(isinCart) {
                isinCart.qty++;
            }else{
                cart.push({...p,qty:1});

            }
            
            // this.$store.state.cart.push(p);
            // console.log(this.$store.state.cart);
        }
    
    },
}
</script>