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
                        <p class="v-profile__categories-p active"><span class="v-profile__categories-span active"></span>Возвраты</p>
                    </router-link>

                    <router-link :to="{ name: 'questions' }"> 
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Вопросы</p>
                    </router-link>

                    <router-link :to="{ name: 'feedback' }"> 
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Обратная связь</p>
                    </router-link>
                </div>
                <div class="v-profile__content">
                    <h6 class="h6-title">Возвраты</h6>

                    <div class="refunds">
                        <p>
                            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut v<br><br>oluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui<br><br>esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut volupt<br><br>ate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis de<br><br>serunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt     
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'v-addresses',
        data() {
            return{

            }
        }
    }
</script>

<style>
    
</style>