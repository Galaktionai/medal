<template>
    <div class="v-card" @click="productClick">
        <div class="card">
            <img class="card-img" :src=" require('../../assets/img/' + product_data.img) " alt="">
            <div class="card__item">
                <p class="card__price-p">{{product_data.price}}</p>
                <p class="card__title-p mb2">{{product_data.type}}</p>
                <p class="card__title-p">{{product_data.brand}}</p>
                <div class="card__size none">
                    <p class="card__size-p">Размеры:</p>
                    <p class="card__size-p">{{product_data.sizeXS}}</p>
                    <p class="card__size-p">{{product_data.sizeS}}</p>
                    <p class="card__size-p">{{product_data.sizeM}}</p>
                    <p class="card__size-p">{{product_data.sizeL}}</p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

    export default{
        name: 'v-card',
        props: {
            product_data: {
                type: Object,
                default() {
                    return{}
                }
            }
        },
        methods: {
            productClick() {
                this.$emit('productClick', this.product_data.id)
            },
        }
    }
</script>

<style>

</style>