<template>
    <div class="v-cart-item">
        <div class="container">
            <div class="v-cart-item__item">
                <div class="v-cart-item__img">
                    <img v-if="cart_item_data.img" :src=" require('../../assets/img/' + cart_item_data.img) " alt="">
                </div>
                <div class="v-cart-item__item__discription">
                    <h4 class="v-cart-item__item__discription-type">{{cart_item_data.type}}</h4>
                    <p class="v-cart-item__item__discription-brand">{{cart_item_data.brand}}</p>
                    <p class="v-cart-item__item__discription-size">size</p>
                    <p class="v-cart-item__item__discription-data">data</p>
                </div>
                <div class="v-cart-item__item__btns">
                    <p class="v-cart-item__item__btns-price">{{cart_item_data.price}}</p>
                    <div class="v-cart-item__item__btns__rgr2g">
                        <button class="krug" v-on:click="decrementItem">-</button>
                        <p>{{cart_item_data.quantity}} шт.</p>
                        <button class="krug" v-on:click="incrementItem">+</button>
                        <button class="v-cart-item__item__btns-delete" @click="deleteFromCart">Удалить</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        name: 'v-cart-item',
        data() {
            return{
            }
        },
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            decrementItem() {
                this.$emit('decrement')
            },
            incrementItem() {
                this.$emit('increment')
            },
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        },
    }
</script>

<style>
    .v-cart-item__item{
        margin-bottom: 24px;
        display: grid;
        grid-template-columns: 114px 1fr 1fr;
        border-radius: 4px;
        border: 1px solid  var(--white-grey-color);
    }

    .v-cart-item__img img{
        width: 100%;
        height: 100%;
    }

    .v-cart-item__item__discription{
        padding: 12px;
        position: relative;
    }

    .v-cart-item__item__discription-type{
        font-weight: 400;
        margin-bottom: 2px;
    }

    .v-cart-item__item__discription-brand{
        font-size: var(--fz12);
        color: var(--dark-grey-color);
        margin-bottom: 2px;
    }

    .v-cart-item__item__discription-size{
        font-size: var(--fz12);
        color: var(--dark-grey-color);
    }

    .v-cart-item__item__discription-data{
        position: absolute;
        bottom: 0;
        font-size: var(--fz12);
        color: var(--dark-grey-color);
        margin-bottom: 12px;
    }

    .v-cart-item__item__btns{
        padding: 12px;
        position: relative;
    }

    .v-cart-item__item__btns-price{
        text-align: end;
    }

    .v-cart-item__item__btns__rgr2g{
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 12px;
    }

    .krug{
        background: none;
        border-radius: 20px;
        width: 19px;
        display: flex;
        justify-content: center;
        height: 19px;
        align-items: center;
        margin: 0 8px;
        border: 1px solid black;
    }

    .v-cart-item__item__btns-delete{
        margin-left: 4px;
        background: none;
        border:  0;
        color: var(--red-color);
        text-decoration: underline;
    }
</style>