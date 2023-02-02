<template>
    <div class="v-popular-tovar">
        <div class="container">
            <h6 class="tovar-title">
                Популярные товары
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
                            <div class="card__item">
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
        name: 'v-popular-tovar',
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
    .v-popular-tovar {
        margin-bottom: 120px;
    }

    .tovar-title {
        color: var(--black-color);
        font-size: var(--fz18);
        font-weight: 400;
        text-align: center;
        margin-bottom: 20px;
    }

    .tovars__item {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 15px;
    }

    .btns-next-prev{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .btn-prev{
        transform: rotate(180deg);
        transition: all .3s;
    }

    .btn-prev:hover{
        opacity: 0.5;
    }

    .btn-next{
        margin-left: 7px;
        transition: all .3s;
    }

    .btn-next:hover{
        opacity: 0.5;
    }
</style>