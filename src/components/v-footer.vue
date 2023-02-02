<template>
    <footer class="v-footer">
        <div class="container">
            <div class="footer__item">
                <div>
                    <p class="footer-p">Навигация</p>
                    <ul>
                        <li class="footer-li"><a class="footer-a" href="#">Главное</a></li>
                        <li class="footer-li"><a class="footer-a" href="#">Мужское</a></li>
                        <li class="footer-li"><a class="footer-a" href="#">Женское</a></li>
                        <li class="footer-li"><a class="footer-a" href="#">Детское</a></li>
                        <li class="footer-li"><a class="footer-a" href="#">Корзина</a></li>
                        <li class="footer-li"><a class="footer-a" href="#">Поиск</a></li>
                        <li class="footer-li"><a class="footer-a" href="#">Профиль</a></li>
                    </ul>
                </div>
                <div>
                    <p class="footer-p">Информация</p>
                    <ul>
                        <li class="footer-li"><a class="footer-a" href="#">Заказы</a></li>
                        <li class="footer-li"><a class="footer-a" href="#">Адреса</a></li>
                        <li class="footer-li"><a class="footer-a" href="#">Скидки</a></li>
                        <li class="footer-li"><a class="footer-a" href="#">Возвраты</a></li>
                        <li class="footer-li"><a class="footer-a" href="#">Вопросы</a></li>
                        <li class="footer-li"><a class="footer-a" href="#">Обратная связь</a></li>
                        <li class="footer-li"><a class="footer-a" href="#">Пользовательские соглашения</a></li>
                    </ul>
                </div>
                <div>
                    <p class="footer-p">Социальные сети</p>
                    <ul>
                        <li class="footer-li">
                            <a class="footer-a" href="#">
                                Instagram
                                <svg class="" width="15" height="15">
                                    <use xlink:href="sprite.svg#inst"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="footer-li">
                            <a class="footer-a" href="#">
                                ВКонтакте
                                <svg class="" width="15" height="15">
                                    <use xlink:href="sprite.svg#vk"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="footer-li">
                            <a class="footer-a" href="#">
                                FaceBook
                                <svg class="" width="15" height="15">
                                    <use xlink:href="sprite.svg#fb"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="footer-li">
                            <a class="footer-a" href="#">
                                Telegram
                                <svg class="" width="15" height="15">
                                    <use xlink:href="sprite.svg#tg"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="footer-li">
                            <a class="footer-a" href="mail:medal.shop@.ru">
                                medal.shop@.ru
                                <svg class="" width="15" height="15">
                                    <use xlink:href="sprite.svg#mail"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p class="footer-p">Подписка на новости скидки</p>
                    <li class="footer-li">
                        <p class="footer-pp" href="#">
                            Подпишитесь на наши рассылки, чтобы получать новости и скидки
                        </p>
                    </li>
                    <form class="footer__form" action="">
                        <input class="footer__form-input" type="text" placeholder="Введите эл. почту">
                        <button class="footer__form-btn">Подписаться</button>
                    </form>
                </div>
            </div>
           
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'v-footer',
    }
</script>
     
<style>
    .v-footer{
        margin-top: 64px;
        border-top: 1px solid var(--grey-color);
        padding: 60px 0 48px;
    }

    .footer__item{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 15px;
    }

    .footer-li{
        list-style-type: none;
        margin-bottom: 12px;
    }

    .footer-p{
        font-size: var(--fz14);
        color: var(--dark-grey-color);
        font-weight: 700;
        margin-bottom: 16px;
    }

    .footer-pp{
        font-size: var(--fz12);
    }

    .footer-a{
        font-size: var(--fz12);
        transition: all .3s;
    }

    .footer-a:hover{
        color: var(--grey-color);
    }

    .footer__form{
        display: block;
    }

    .footer__form-input{
        margin: 4px 0;
        padding: 6px 12px;
        outline: none;
        border: 1px solid var(--grey-color);
        width: 100%;
    }

    .footer__form-input::placeholder{
        font-size: var(--fz12);
    }

    .footer__form-btn{
        display: block;
        width: 100%;
        font-size: var(--fz12);
        color: var(--white-color);
        background-color: var(--grey-color);
        border: 0;
        padding: 8px 16px;
        transition: all .3s;
    }

    .footer__form-btn:hover{
        background-color: var(--dark-grey-color);
    }
</style>