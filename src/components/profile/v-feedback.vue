<template>
    <div class="v-feedback">
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
                        <p class="v-profile__categories-p"><span class="v-profile__categories-span"></span>Вопросы</p>
                    </router-link>

                    <router-link :to="{ name: 'feedback' }"> 
                        <p class="v-profile__categories-p active"><span class="v-profile__categories-span active"></span>Обратная связь</p>
                    </router-link>
                </div>
                <div class="v-profile__content">
                    <h6 class="h6-title">Обратная связь</h6>

                    <div class="feedback">
                        <p class="feedback-p">Напишите нам</p>
                        <textarea class="feedback-textarea" placeholder="Напишите нам"></textarea>
                        <div class="feedback__item">
                            <div class="feedback__item__txt">
                                <p class="feedback__item__txt-1">
                                    Адрес
                                </p>
                                <p class="feedback__item__txt-2">
                                    Хабаровск, Ленина, 8
                                </p>
                                <p class="feedback__item__txt-1">
                                    Режим работы
                                </p>
                                <p class="feedback__item__txt-2">
                                    10:00 - 22:00, ежедневно
                                </p>
                                <p class="feedback__item__txt-1">
                                    Конт. телефон
                                </p>
                                <p class="feedback__item__txt-2">
                                    +7(924)562-19-53
                                </p>
                                <p class="feedback__item__txt-1">
                                    Эл. почта
                                </p>
                                <p class="feedback__item__txt-2">
                                    alma.lawson@example.com
                                </p>
                                <p class="feedback__item__txt-1">
                                    Инстаграм
                                </p>
                                <a class="feedback__item__txt-2" href="#">
                                    ссылка.на.соцсеть.com
                                </a>
                                <p class="feedback__item__txt-1" href="#">
                                    ВК
                                </p>
                                <a class="feedback__item__txt-2" href="#">
                                    ссылка.на.соцсеть.com
                                </a>
                                <p class="feedback__item__txt-1" href="#">
                                    Твиттер
                                </p>
                                <a class="feedback__item__txt-2" href="#">
                                    ссылка.на.соцсеть.com
                                </a>
                            </div>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22142.90299543575!2d37.6007080459113!3d55.75921199846761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sde!4v1670928017070!5m2!1sru!2sde" width="317" height="215" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
        name: 'v-feedback',
        data() {
            return{
                
            }
        }
    }
</script>

<style>
    .feedback__item{
        display: grid;
        grid-template-columns: 1fr 317px;
        grid-column-gap: 15px;
    }

    .feedback__item__txt{
        display: grid;
        grid-template-columns: 151px 1fr;
        gap: 16px;
    }

    .feedback__item__txt-1{
        font-size: var(--fz14);
        color: var(--dark-grey-color);
    }

    .feedback__item__txt-2{
        font-size: var(--fz14);
        color: var(--black-color);
    }

    .feedback-textarea{
        margin: 4px 0 16px;
        max-width: 708px;
        min-width: 100%;
        min-height: 158px;
        max-height: 1000px;
        padding: 10px 14px;
        border: 1px solid #BFBFBF;
        border-radius: 4px;
        outline: none;
        font-size: var(--fz14);
    }
</style>