<template>
    <section class="v-banner">
        <div class="container">
            <div class="banner-item">
                <div class="banner__box">
                    <swiper
                        :modules="modules"
                        :loop="true"
                        :autoplay="{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        }"
                    >
                        <swiper-slide v-for="text in swiperTextBase" :key="text.description">
                            <img class="banner__box-img" :src=" require('../../assets/img/' + text.img) " alt="img">
                            <h2 class="banner__box-txt">{{text.text}}</h2>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="banner__box">
                    <img class="banner__box-img" src="../../assets/img/sneacers.jpg" alt="">
                    <h2 class="banner__box-txt">
                        ОБувь
                    </h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>    
    import {Swiper, SwiperSlide} from 'swiper/vue'
    import {Autoplay, Pagination} from 'swiper'
    import 'swiper/css'
    import 'swiper/css/pagination'
    import {ref} from 'vue'
    export default{
        name: 'v-banner',
        components: {Swiper, SwiperSlide},
        setup() {
            const swiperTextBase = ref([
            {
                text: 'Мужская одежда',
                img: 'man-clothes.jpg',
            },
            {
                text: 'Женская одежда',
                img: 'womanclothes.jpg',
            },
            ]);
            return {modules: [Pagination, Autoplay], swiperTextBase}
        }
    }
</script>

<style>
.swiper {
    width: 100%;
    height: 100%;
}

.v-banner{
    margin: 60px 0 120px;
}

.banner__box-txt{
    text-transform: uppercase;
    font-weight: bold;
    color: var(--white-color);
    position: relative;
    text-shadow: 0px 0px 23px rgba(0, 0, 0, 0.25);
    font-size: var(--fz36);
    text-align: center;
    align-items: center;
    display: flex;
    height: 100%;
    width: 471px;
    justify-content: center;
}

.banner-item{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
}

.banner__box{
    max-width: 483px;
    min-width: 10px;
    height: 408px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: all .3s;
    cursor: pointer;
}

.banner__box:hover{
    opacity: .8;
}

.banner__box-img{
    display: block;
    width: 471px;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 0;
}

</style>