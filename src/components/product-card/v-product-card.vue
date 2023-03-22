<template>
    <div class="v-product-card">
        <div class="container">
            <div class="product-card__item">
                <div class="product-card__images">
                    <img v-if="product.img" class="product-card__images-img" :src=" require('../../assets/img/' + product.img) " alt="">
                    <div class="product-card__images__other">
                        <img v-if="product.img" :src=" require('../../assets/img/' + product.img) " alt="">
                        <img v-if="product.img" :src=" require('../../assets/img/' + product.img) " alt="">
                        <img v-if="product.img" :src=" require('../../assets/img/' + product.img) " alt="">
                        <img v-if="product.img" :src=" require('../../assets/img/' + product.img) " alt="">
                        <img v-if="product.img" :src=" require('../../assets/img/' + product.img) " alt="">
                        <img v-if="product.img" :src=" require('../../assets/img/' + product.img) " alt="">
                    </div>
                </div>
                <div class="product-card__txt">
                    <h4 class="product-card__txt-type">{{product.type}}</h4>
                    <p class="product-card__txt-brand">{{product.brand}}</p>
                    <p class="product-card__txt-description">{{product.description}}</p>
                    <div>
                        <ul class="product-card__txt-ul">
                            <li class="product-card__txt-characteristic">{{product.material}}</li>
                            <li class="product-card__txt-characteristic">{{product.color}}</li>
                        </ul>
                    </div>
                    <div class="product-card__txt__bottom">
                        <div class="product-card__txt__bottom__size-block">
                            <div class="btn-group" role="group" id="toolBtns">
                                <input class="product-card-size-input" type="checkbox" id="sizeXS">
                                <label class="product-card-size-label" for="sizeXS">{{product.sizeXS}}</label>

                                <input class="product-card-size-input" type="checkbox" id="sizeS">
                                <label @click="sizeBtn" :class="active" class="product-card-size-label" for="sizeS">{{product.sizeS}}</label>

                                <input class="product-card-size-input" type="checkbox" id="sizeM">
                                <label @click="sizeBtn" :class="active" class="product-card-size-label" for="sizeM">{{product.sizeM}}</label>

                                <input class="product-card-size-input" type="checkbox" id="sizeL">
                                <label @click="sizeBtn" :class="active" class="product-card-size-label" for="sizeL">{{product.sizeL}}</label>
                            </div>
                            <div>
                                <p>{{product.price}}</p>
                            </div>
                        </div>
                        <div class="product-card__txt__bottom__btns">
                            <button>Купить</button>
                            <button @click="addToCart">Добавить в корзину</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <v-cart 
            :cart_data="CART"
             v-bind="tovars_data"
        >
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import vCart from '../cart/v-cart'
 
    export default{
        name: 'v-product-card',
        components: {
            vCart
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return[]
                }
            }
        },
        data () {
            return {
                
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
            product() {
                let result = {}
                let vm = this;
                this.PRODUCTS.map(function (item) {
                    if (item.id == vm.$route.query.product) {
                        result = item;
                    }
                })
                return result;
            }
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart() {
                this.ADD_TO_CART(this.product)
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
        },
    }
</script>

<style>
    .v-product-card{
        margin-top: 32px;
    }

    .product-card__item{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;
    }

    .product-card__images-img{
        width: 100%; 
        height: 485px;
        display: block;
        margin: 0;
        border: 1px solid var(--grey-color);
        object-fit: cover;
    }

    .product-card__images__other{
        margin-top: 15px;
        width: 483px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
        grid-column-gap: 15px;
    }

    .product-card__images__other img{
        width: 100%;
        height: 68px;
        border: 1px solid var(--grey-color);
        object-fit: cover;
    }

    .product-card__txt{
        position: relative;
    }

    .product-card__txt-type{
        font-size: var(--fz48);
    }

    .product-card__txt-brand{
        font-size: var(--fz20);
        margin-bottom: 12px;
    }

    .product-card__txt-description{
        font-size: var(--fz14);
    }

    .product-card__txt-ul{
        margin: 12px 0;
    }

    .product-card__txt-characteristic{
        margin-left: 18px;
    }

    .product-card__txt__bottom{
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .product-card__txt__bottom__btns{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;

    }

    .product-card__txt__bottom__btns button{
        background-color: var(--black-color);
        color: var(--white-color);
        width: 100%;
        padding: 16px;
        border: 0;
        border-radius: 4px;
        font-size: var(--fz16);
        margin: 12px 0 83px;
    }

    .product-card__txt__bottom__size-block{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .product-card-size-input{
        overflow: hidden;
    }

    .product-card-size-label{
        margin-right: 4px;
        padding: 4px 6px;
        font-size: var(--fz14);
        background-color: var(--white-grey-color);
        border-radius: 2px;
    }

    .product-card-size-label.active{
        background-color: var(--black-color);
        color: var(--white-color);
    }
</style>