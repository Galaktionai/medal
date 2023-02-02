<template>
    <div class="v-cart">
        <div class="container">
            <h6 class="h6-title">Корзина</h6>
            <h6 v-if="!cart_data.length" class="h6-title">Нет добавленных в корзину товаров</h6>
        </div>
        <v-cart-item 
            v-for="(item, index) in cart_data"
            :key="item.id"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
        <div class="container">
            <p class="v-cart-total">Итого: {{cartTotalCost}} ₽</p>
            <span class="grey-line"></span>
            <div class="v-cart__forms">
                <h6 class="h6-title">
                    Оформление заказа
                </h6>
                <form action="">
                    <div class="v-cart__forms__grid">
                        <div class="div-form">
                            <p class="div-form-p">
                                Край/Облайсть/Регион <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите Край/Облайсть/Регион">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Город <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите город">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Почтовый индекс <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите почтовый индекс">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Улица <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите улицу">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Квартира <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите квартиру">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Номер телефона <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите номер телефона">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Фамилия <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Введите Фамилию">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Имя <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Имя">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Отчество <span>*</span>
                            </p>
                            <input required class="div-form-input" type="text" placeholder="Отчество">
                        </div>
                        <div class="div-form">
                            <p class="div-form-p">
                                Промокод <span>*</span>
                            </p>
                            <div class="promokod">
                                <input required class="div-form-input promokod-input" type="text" placeholder="Введите промокод">
                                <button>Применить</button>
                            </div>
                        </div>
                    </div>
                    <div class="send-btn">
                        <p>
                            Нажимая на кнопку «Оформить заказ», вы принимаете условия
                        </p>
                        <a href="">
                            публичной оферты
                        </a>
                        <button>
                            Оформить заказ
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
</template>

<script>
    import vCartItem from './v-cart-item'
    import { mapActions, mapGetters } from 'vuex'

    export default{
        name: 'v-cart',
        components: {
            vCartItem
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return[]
                }
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
            product() {
                let result = {}
                let vm = this;
                this.PRODUCTS.map(function (item) {
                    if (item.id == vm.$route.query.product) {
                        result = item;
                    }
                })
                return result;
            },
            cartTotalCost() {
                let result = []

                if (this.cart_data.length) {
                    for (let item of this.cart_data) {
                        result.push(item.price * item.quantity)
                    }

                    result = result.reduce(function (sum, el) {
                        return sum + el;
                    })
 
                    return result
                } else {
                    return 0
                }
            }
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
                'INCREMENT_CART_ITEM',
                'DECREMENT_CART_ITEM'
            ]),
            increment(index){
                this.INCREMENT_CART_ITEM(index)
            },
            decrement(index){
                this.DECREMENT_CART_ITEM(index)
            },
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            },
        },
    }
    
</script>

<style>
    .v-cart h6{
        margin: 32px 0;
    }

    .v-cart-total{
        text-align: right;
        font-size: var(--fz14);
        font-weight: 700;
        margin-bottom: 32px;
    }

    .grey-line{
        content: '';
        height: 1px;
        width: 100%;
        background: var(--white-grey-color);
        display: block;
    }

    .v-cart__forms__grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }
    
    .div-form-p{
        font-size: var(--fz14);
        margin-bottom: 6px;
    }

    .div-form-p span {
        color: var(--red-color);
    }

    .div-form-input{
        width: 100%;
        display: block;
        padding: 10px 14px; 
        border: 1px solid var(--grey-color);
        border-radius: 4px;
        outline: none;
    }

    .div-form-input::placeholder{
        font-size: var(--fz14);
    }
    
    .promokod{
        display: flex;
    }

    .div-form-input.promokod-input{
        border-radius: 4px 0 0 4px ;
    }

    .promokod button{
        background: var(--black-color);
        color: var(--white-color);
        font-size: var(--fz14);
        padding: 0 42px;
        border-radius: 0 4px 4px 0;
    }

    .send-btn{
        margin-top: 32px;
        border: 1px solid var(--black-color);
        display: flex;
        border-radius: 4px;
        align-items: center;
    }

    .send-btn p{
        color: var(--dark-grey-color);
        margin-left: 14px;
        font-size: var(--fz14);
    }

    .send-btn a{
        color: var(--dark-grey-color);
        margin-left: 5px;
        font-size: var(--fz14);
        text-decoration: underline;
    }

    .send-btn button{
        background: var(--black-color);
        color: white;
        padding: 12px 25px; 
        margin-left: auto;
        font-size: var(--fz14);
        border: 0;
        border-radius: 0 4px 4px 0;
    }
</style>