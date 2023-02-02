<template>
    <div class="v-profile">
        <div class="container">
            <div class="v-profile__item">
                <div class="v-profile__categories">
                    <h6 class="h6-title">Категории</h6>
                    <router-link :to="{ name: 'profile' }"> 
                        <p class="v-profile__categories-p active"><span class="v-profile__categories-span active"></span>Профиль</p>
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
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Вопросы</p>
                    </router-link>

                    <router-link :to="{ name: 'feedback' }"> 
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Обратная связь</p>
                    </router-link>
                </div>
                <div class="v-profile__content">
                    <h6 class="h6-title">Профиль</h6>
                    <img class="v-profile__content-img" src="../../assets/img/avatarka.jpg" alt="">
                    <div class="v-cart__forms__grid">
                        <div class="div-form">
                            <p class="div-form-p">
                                Имя <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите Имя">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Фамилия <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите Фамилию">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Электронная почта <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите электорнную почту">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Номер телефона <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите номер телефона">
                        </div>
                    </div>
                    <p class="v-profile__content-change-password">Изменить пароль</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    .v-profile__item{
        margin-top: 32px;
        display: grid;
        grid-template-columns: 234px 1fr;
        grid-column-gap: 15px;
    }

    .v-profile__item h6{
        margin: 32px 0; 
    }

    .v-profile__categories-p{
        font-size: var(--fz14);
        color: var(--dark-grey-color);
        display: flex;
        align-items: center;
    }

    .v-profile__categories-p.active{
        color: var(--black-color);
    }

    .v-profile__categories-span{
        content: '';
        display: block;
        width: 2px;
        height: 34px;
        background: var(--grey-color);
        margin-right: 16px;
    }

    .v-profile__categories-span.active{
        background: var(--black-color);
    }

    .v-profile__content-img{
        width: 68px;
        height: 68px;
        object-fit: cover;
        display: block;
        border-radius: 68px;
        margin-bottom: 28px;
    }

    .v-profile__content-change-password{
        margin-top: 16px;
        text-decoration: underline;
        font-size: var(--fz14);
    }
</style>