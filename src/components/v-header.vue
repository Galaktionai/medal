<template>
    <header class="v-header" :class="headerClasses">
        <div class="black-header">
            <div class="container">
                <div class="black-header-item">
                    <div class="black-header-item__city">
                        <select>
                            <option value="Якутск">Якутск</option>
                            <option value="Москва">Москва</option>
                        </select>
                    </div>
                    <div class="black-header-item__center">
                        <a class="mr40" href="#">
                            Доставка и оплата
                        </a>
                        <a href="#">
                            Вопросы
                        </a>
                    </div>
                    <div>
                        <a href="tel: +79245621953">+7 (924) 562-19-53</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="header" class="white-header">
            <div class="container">
                <div class="white-header-item">
                    <div class="header-nav">
                        <nav class="white-header-item__nav">
                            <ul class="white-header-item__nav-ul">
                                <li class="white-header-item__li" @click="headerAccardion">
                                    <p class="header-item__nav-p">
                                        Мужское
                                    </p>
                                    <svg width="8" height="8">
                                        <use xlink:href="../assets/img/sprite.svg#dropdown"></use>
                                    </svg>
                                </li>
                                <li class="white-header-item__li">
                                    <p class="header-item__nav-p">
                                        Женское
                                    </p>
                                    <svg width="8" height="8">
                                        <use xlink:href="../assets/img/sprite.svg#dropdown"></use>
                                    </svg>
                                </li>
                                <li class="white-header-item__li">
                                    <p class="header-item__nav-p">
                                        Детское
                                    </p>
                                    <svg width="8" height="8">
                                        <use xlink:href="../assets/img/sprite.svg#dropdown"></use>
                                    </svg>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="white-header-item__logo">
                        <router-link :to="{ name: 'home' }">
                            <svg width="85" height="18">
                                <use xlink:href="../assets/img/sprite.svg#medal-logo"></use>
                            </svg>
                        </router-link>
                    </div>
                    <div class="white-header-item-icons">
                        <router-link :to="{ name: 'cart-section', params: { cart_data: CART }}">
                            <p class="cart-length">
                                {{CART.length}}
                            </p>
                            <svg class="white-header-item__icon" width="26" height="26">
                                <use xlink:href="../assets/img/sprite.svg#bags"></use>
                            </svg>
                        </router-link>
                        <svg class="white-header-item__icon" width="26" height="26">
                            <use xlink:href="../assets/img/sprite.svg#search"></use>
                        </svg>
                        <svg class="white-header-item__icon" width="26" height="26">
                            <use xlink:href="../assets/img/sprite.svg#sign"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__category" :class="accordionClasses">
            <div class="container">
                <div class="header__category__item">
                    <div class="header__category__left">
                        <ul class="header-item__category-ul">
                            <li class="header-item__category-li">
                                <router-link :to="{name: 'catalog'}"  class="header-item__category-a" href="">Одежда</router-link>
                            </li> 
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Худи и свитшоты</a>
                            </li>
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Брюки</a>
                            </li>
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Джинсы</a>
                            </li>
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Футболки</a>
                            </li>
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Шорты</a>
                            </li>
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Куртки</a>
                            </li>
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Рубашки</a>
                            </li>
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Спортивные костюмы</a>
                            </li>
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Ботинки</a>
                            </li>
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Кеды</a>
                            </li>
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Кеды</a>
                            </li>
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Кроссовки</a>
                            </li>
                            <li class="header-item__category-li">
                                <a class="header-item__category-a" href="">Носки</a>
                            </li>
                        </ul>
                    </div>
                    <div class="header__category__right">
                        <div class="header__category__right__reclama">
                            <img class="header__category-reclama-img" src="../assets/img/reclama.jpg" alt="">
                            <h5 class="header__category-reclama-h5">
                                NEW <br> КУРТКА <br> NIKE BASIC DOWN JACKET
                            </h5>
                        </div>
                        <div class="header__category__right__reclama">
                            <img class="header__category-reclama-img" src="../assets/img/reclama2.jpg" alt="">
                            <h5 class="header__category-reclama-h5">
                                NEW Кроссовки new balance 550
                            </h5>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default{
        name: 'v-header',
        data() {
            return {
                isOpen: true
            }
        },
        methods: {
            headerAccardion: function() {
                this.isOpen = !this.isOpen;
            }
        },
        computed: {
            ...mapGetters([
                'CART'
            ]),
            accordionClasses: function() {
                return {
                    'closed': this.isOpen
                }
            }
        }
    }
</script>

<style>
.cart-length{
    position: absolute;
    font-size: var(--fz12);
    transform: translate(9px, 9px);
}

.black-header {
    background-color: var(--black-color);
    padding: 7px 0 8px;
    z-index: 1000;
    position: relative;
}

.container {
    max-width: calc(981px + 24px);
    padding: 0 24px;
    margin: 0 auto;
}

.black-header-item {
    display: flex;
    justify-content: space-between;
    position: relative;
}

.black-header-item__center{
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
}

.black-header-item a{
    color: var(--white-color);
    font-size: var(--fz12);
}

.mr40{
    margin-right: 40px;
}

.black-header-item__city select{
    background: none;
    outline: none;
    border: 0;
    color: var(--white-color);
}

.black-header-item__city option{
    background-color: var(--black-color);
    color: var(--white-color);
}

.white-header{
    border-bottom: 1px solid var(--grey-color);
    background-color: var(--white-color);
    z-index: 1000;
    position: relative;
}

.white-header-item__li{
    list-style-type: none;
    display: flex;
}

.header-item__nav-p:hover{
    color: var(--grey-color);
}

.white-header-item__li svg{
    margin: 5px 0 0 0;
}

.header-item__nav-p{
    margin-right: 4px;
    font-size: var(--fz14);
    color: var(--black-color);
    cursor: pointer;
    transition: all .3s;
}

.header-item__nav-memu{
    display: none;
}

.header-item__nav-memu li{
    list-style-type: none;
}

.white-header-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0 15px;
    position: relative;
}

.header-nav{
    z-index: 10;
}

.white-header-item__nav-ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
}

.white-header-item-icons{
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
}

.white-header-item__icon{
    cursor: pointer;
    transition: all .3s;
}

.white-header-item__icon:hover{
    opacity: .5;
}

.white-header-item__logo{
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 1;
}

.white-header-item__logo a{
    transition: all .3s;
}

.white-header-item__logo a:hover{
    opacity: 0.5;
}


.header__category{
    background-color: var(--white-color);
    padding: 32px 0;
    border-bottom: 1px solid var(--grey-color);
    overflow: hidden;
    transition: all 0.5s;
    z-index: 100;
    position: absolute;
    width: 100%;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
}

.header__category.closed{
    transform: translateY(-100%);
    box-shadow: none;
}

.header-item__category-ul{
    display: grid;
    grid-template-rows: auto;
    gap: 12px;
}

.header-item__category-li{
    list-style-type: none;
}

.header__category__item{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
}

.header__category__right{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
}

.header__category__right__reclama{
    position: relative;
}

.header__category-reclama-img{
    position: absolute;
}

.header__category-reclama-h5{
    z-index: 10;
    position: absolute;
    color: var(--white-color);
    font-size:var(--fz24);
    padding: 18px;
    text-transform: uppercase;
    bottom: 0;
}

</style>