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
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Заказы</p>
                    </router-link>

                    <router-link :to="{ name: 'addresses' }"> 
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Адреса</p>
                    </router-link>

                    <router-link :to="{ name: 'discounts' }"> 
                        <p class="v-profile__categories-p active"><span class="v-profile__categories-span active"></span>Скидки</p>
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
                    <h6 class="h6-title">Скидки</h6>

                    <div class="discounts">
                        <p>Промокод на черную пятницу</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'v-discounts',
        data() {
            return{

            }
        }
    }
</script>

<style>
    .discounts{
        display: block;
        width: 100%;
        background: linear-gradient(92.68deg, #000000 0%, #272727 49.55%);
        border-radius: 4px;
        margin-bottom: 24px;
    }

    .discounts p{
        color: var(--white-color);
        text-align: center;
        font-size: var(--fz18);
        padding: 50px 0; 
    }
</style>