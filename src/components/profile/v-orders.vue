<template>
    <div class="v-profile">
        <div class="container">
            <div class="v-profile__item">
                <div class="v-profile__categories">
                    <h6 class="h6-title">Категории</h6>

                    <router-link :to="{ name: 'profile' }"> 
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Профиль</p>
                    </router-link>

                    <router-link :to="{ name: 'orders' }"> 
                        <p class="v-profile__categories-p active"><span class="v-profile__categories-span active"></span>Заказы</p>
                    </router-link>

                    <router-link :to="{ name: 'addresses' }"> 
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Адреса</p>
                    </router-link>

                    <router-link :to="{ name: 'discounts' }"> 
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Скидки</p>
                    </router-link>

                    <router-link :to="{ name: 'refunds' }"> 
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Возвраты</p>
                    </router-link>

                    <router-link :to="{ name: 'questions' }"> 
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Вопросы</p>
                    </router-link>

                    <router-link :to="{ name: 'feedback' }"> 
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Обратная связь</p>
                    </router-link>
                </div>
                <div class="v-profile__content">
                    <h6 class="h6-title">Заказы</h6>

                    <div class="v-cart-item__item">
                        <div class="v-cart-item__img">
                            <img src="../../assets/img/cart.jpg" alt="">
                        </div>
                        <div class="v-cart-item__item__discription">
                            <h4 class="v-cart-item__item__discription-type">Лонгслив</h4>
                            <p class="v-cart-item__item__discription-brand">С.P. Company </p>
                            <p class="v-cart-item__item__discription-size">size</p>
                            <p class="v-cart-item__item__discription-data">data</p>
                        </div>
                        <div class="v-cart-item__item__btns">
                            <p class="v-cart-item__item__btns-price">6 690 ₽</p>
                            <div class="v-cart-item__item__btns__rgr2g">
                                <a class="track-a" href="">Отследить</a>
                            </div>
                            
                        </div>
                    </div>

                    <div class="v-cart-item__item">
                        <div class="v-cart-item__img">
                            <img src="../../assets/img/cart.jpg" alt="">
                        </div>
                        <div class="v-cart-item__item__discription">
                            <h4 class="v-cart-item__item__discription-type">Лонгслив</h4>
                            <p class="v-cart-item__item__discription-brand">С.P. Company </p>
                            <p class="v-cart-item__item__discription-size">size</p>
                            <p class="v-cart-item__item__discription-data">data</p>
                        </div>
                        <div class="v-cart-item__item__btns">
                            <p class="v-cart-item__item__btns-price">6 690 ₽</p>
                            <div class="v-cart-item__item__btns__rgr2g">
                                <a class="track-a" href="">Отследить</a>
                            </div>
                            
                        </div>
                    </div>

                    <div class="v-cart-item__item">
                        <div class="v-cart-item__img">
                            <img src="../../assets/img/cart.jpg" alt="">
                        </div>
                        <div class="v-cart-item__item__discription">
                            <h4 class="v-cart-item__item__discription-type">Лонгслив</h4>
                            <p class="v-cart-item__item__discription-brand">С.P. Company </p>
                            <p class="v-cart-item__item__discription-size">size</p>
                            <p class="v-cart-item__item__discription-data">data</p>
                        </div>
                        <div class="v-cart-item__item__btns">
                            <p class="v-cart-item__item__btns-price">6 690 ₽</p>
                            <div class="v-cart-item__item__btns__rgr2g">
                                <a class="track-a" href="">Отследить</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'v-orders',
        data() {
            return{

            }
        }
    }
</script>

<style>
    .track-a{
        text-decoration: underline;
    }
</style>