<template>
    <div class="v-hot-stock">
        <div class="container">
            <h6 class="tovar-title">
                Горячие товары
            </h6>
                <swiper
                    :modules="modules"
                    :loop="true"
                    :slidesPerView="4"
                    :spaceBetween="15"
                    :pagination="{
                        el: '.swiper-pagination',
                        clickable: true,
                    }"
                    :navigation="{
                        nextEl: '.btn-next',
                        prevEl: '.btn-prev',
                    }"
                >
                    <swiper-slide v-for="text in swiperTextBase" :key="text.description">
                        <a href="card.html" class="card">
                            <img class="card-img" :src=" require('../../assets/img/' + text.img) " alt="">
                            <div class="cart__item">
                                <p class="card__price-p">{{text.price}}</p>
                                <p class="card__title-p mb2">{{text.title}}</p>
                                <p class="card__title-p">{{text.brand}}</p>
                                <div class="card__size none">
                                    <p class="card__size-p">Размеры:</p>
                                    <p class="card__size-p">XS</p>
                                    <p class="card__size-p">S</p>
                                    <p class="card__size-p">M</p>
                                    <p class="card__size-p">L</p>
                                </div>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
            
            <div class="btns-next-prev">
                <svg class="btn-prev" width="20" height="20">
                    <use xlink:href="../../assets/img/sprite.svg#btn-next-prev"></use>
                </svg>
                <svg class="btn-next" width="20" height="20">
                    <use xlink:href="../../assets/img/sprite.svg#btn-next-prev"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    import {Swiper, SwiperSlide} from 'swiper/vue'
    import {Navigation, Pagination} from 'swiper'
    import 'swiper/css'
    import 'swiper/css/pagination'
    import {ref} from 'vue'

    export default{
        name: 'v-hot-stock',
        components: {Swiper, SwiperSlide},
        setup() {
            const swiperTextBase = ref([
            {
                price: '6 690 ₽',
                title: 'Лонгслив',
                brand: 'С.P. Company',
                img: 'cart.jpg',
            },
            {
                price: '6 690 ₽',
                title: 'Лонгслив',
                brand: 'С.P. Company',
                img: 'cart.jpg',
            },
            {
                price: '6 690 ₽',
                title: 'Лонгслив',
                brand: 'С.P. Company',
                img: 'cart.jpg',
            },
            {
                price: '6 690 ₽',
                title: 'Лонгслив',
                brand: 'С.P. Company',
                img: 'cart.jpg',
            },
            
            ]);
            return {modules: [Pagination, Navigation], swiperTextBase}
        }
    }
</script>

<style>
    .stock-item{
        padding: 47px 0;
        background-color: var(--red-color);
        margin-bottom: 120px;
    }

    .stock-item-h3{
        text-align: center;
        font-style: italic;
        color: var(--white-color);
        font-size: var(--fz36);
    }
</style>