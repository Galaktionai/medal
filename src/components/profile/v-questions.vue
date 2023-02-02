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
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Скидки</p>
                    </router-link>

                    <router-link :to="{ name: 'refunds' }"> 
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Возвраты</p>
                    </router-link>

                    <router-link :to="{ name: 'questions' }"> 
                        <p class="v-profile__categories-p active"><span class="v-profile__categories-span active"></span>Вопросы</p>
                    </router-link>

                    <router-link :to="{ name: 'feedback' }"> 
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Обратная связь</p>
                    </router-link>
                </div>
                <div class="v-profile__content">
                    <h6 class="h6-title">Вопросы</h6>

                    <v-questions-box />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vQuestionsBox from './v-questions-box'

    export default{
        name: 'v-addresses',
        data() {
            return{
                
            }
        },
        components:{
            vQuestionsBox
        }
    }
</script>

<style>
    
</style>