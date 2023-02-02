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
                        <p class="v-profile__categories-p active"><span class="v-profile__categories-span active"></span>Адреса</p>
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
                    <h6 class="h6-title">Адреса</h6>

                    <div class="v-cart__forms__grid">
                        <div class="div-form">
                            <p class="div-form-p">
                                Край/Облайсть/Регион
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите Край/Облайсть/Регион">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Город
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите город">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Почтовый индекс
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите почтовый индекс">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Улица
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите улицу">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Квартира
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите квартиру">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Номер телефона
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите номер телефона">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Фамилия
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите Фамилия">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Имя
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите Имя">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Отчество
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите Отчество">
                        </div>
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