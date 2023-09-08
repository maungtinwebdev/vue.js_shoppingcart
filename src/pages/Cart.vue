<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container mt-5">
        <!-- <h1>Cart PAGE Vue</h1> -->
        <div class="row">
            <div class="col-9 mx-auto d-flex">
                <table class="table table-striped w-75 h-75 m-auto bordered">
                    <tr>
                        <th class="text-center">No</th>
                        <th class="text-center">Name</th>
                        <th class="text-center">Photo</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">+ / -</th>
                        <th class="text-center">Qty</th>
                        <th class="text-center">Total</th>
                    </tr>
                    <tr v-for="(p,i) in products" :key="i" >
                        <td class="text-center">{{ i+1 }}</td>
                        <td class="text-center">{{ p.title }}</td>
                        <td class="text-center"><img style="width:150px; height: 150px;" :src="p.url" alt="Product Image"></td>
                        <td class="text-center">${{ p.id }}00</td>
                        <td class="text-center d-flex">
                            <button @click="addqty(p)" class="btn rounded-circle btn-success text-warning mx-3 font-weight-bold">+</button>
                            <button @click="reduceqty(p)" class="btn btn-danger text-warning font-weight-bold">-</button>
                        </td>
                        <td class="text-center">{{ p.qty }}</td>
                        <td class="text-center">${{ p.qty * p.id }}00</td>
                    </tr>
                </table>
            </div>

            <!-- <div class="col-3 text-center d-flex d-xl-block d-sm-none">
                <h1 class="d-sm-none">Total Price : </h1>
            </div> -->
        </div>
    </div>
</template>




<script>
export default {
    nane:"Cart",
    data() {
        return {
            products:[],
            pricesum:[],
        }
    },
    created() {
        this.products = this.$store.state.cart;
        const sum = this.products.reduce((partialSum, a) => partialSum + a, 0);
       console.log(sum);
    },
    methods: {
        
        addqty(p) {
            p.qty++;
        },
        reduceqty(p) {
            p.qty--;
        }
       
    }
    
}
</script>