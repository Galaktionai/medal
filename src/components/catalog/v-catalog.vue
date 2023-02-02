<template>
    <div class="v-catalog">
        <div class="container">
            <div class="catalog__item">
                <div class="catalog__filtre">
                    <h6 class="h6-title">
                        Фильтр
                    </h6>
                    <div class="catalog__filtre__item">
                        <p class="filtre-title">
                            Цена
                        </p>
                        <div class="input-ranges-txt">
                            <div>
                                <p>От</p>
                                <p>₽ {{minPrice}}</p>
                            </div>
                            <div>
                                <p>До</p>
                                <p>₽ {{maxPrice}}</p>
                            </div>
                        </div>
                        <div class="input-ranges">
                            <input 
                                class="price-input-range" 
                                type="range"
                                min="0"
                                max="10000"
                                step="10"
                                v-model.number="minPrice"
                                @change="setRangeSlider"  
                            >
                            <input 
                                class="price-input-range" 
                                type="range"
                                min="0"
                                max="10000"
                                step="10"
                                v-model.number="maxPrice"
                                @change="setRangeSlider"  
                            >
                        </div>
                        
                    </div>
                    <div class="catalog__filtre__item">
                        <p class="filtre-title">
                            Материал
                        </p>
                        <div class="catalog__filtre__item__show">
                            <input type="checkbox">
                            <input type="checkbox">
                            <input type="checkbox">
                        </div>
                    </div>
                    <div class="catalog__filtre__item">
                        <p class="filtre-title">
                            Размер
                        </p>
                        <div class="catalog__filtre__item__show">
                            <input type="checkbox">
                            <input type="checkbox">
                            <input type="checkbox">
                        </div>
                    </div>
                    <div class="catalog__filtre__item">
                        <p class="filtre-title">
                            Цвет
                        </p>
                        <div class="catalog__filtre__item__show">
                            <input type="checkbox">
                            <input type="checkbox">
                            <input type="checkbox">
                        </div>
                    </div>
                </div>
                <div class="catalog__carts">
                    <div class="catalog__carts__txt">
                        <h6 class="h6-title">
                            Одежда
                        </h6>
                        <v-select 
                            :options="categories"
                            @select="sortByCategories"
                            :selected="selected"
                        />
                    </div>
                    
                    <div class="catalog__carts__produkcts">
                        <v-card 
                            v-for="product in filteredProducts"
                            :key="product.id"
                            :product_data="product"
                            @productClick="productClick"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vCard from './v-card'
    import vSelect from './v-select'
    import { mapActions, mapGetters } from 'vuex';

    export default{
        name: 'v-catalog',
        components: {
            vCard,
            vSelect
        },
        data() {
            return {
                categories: [
                    {name: 'Сортировка', value: 'ALL'},
                    {name: 'Мужское', value: 'м'},
                    {name: 'Женское', value: 'ж'},
                ],
                selected: 'Сортировка',
                sortedProducts: [],
                minPrice: 0,
                maxPrice: 10000,
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS'
            ]),
            filteredProducts() {
                if (this.sortedProducts.length) {
                    return this.sortedProducts
                } else {
                    return this.PRODUCTS
                }
            },
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
            ]),
            setRangeSlider() {
                if (this.minPrice > this.maxPrice) {
                    let tmp = this.maxPrice;
                    this.maxPrice = this.minPrice;
                    this.minPrice = tmp;
                }
                this.sortByCategories()
            },
            sortByCategories() {
                let vm = this;
                this.sortedProducts = [...this.PRODUCTS]
                this.sortedProducts = this.sortedProducts.filter(function (item) {
                    return item.price >= vm.minPrice && item.price <= vm.maxPrice
                })
            },
            productClick(id) {
                this.$router.push( {name: 'product', query: { 'product': id } })
            },
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then((response) => {
                    if (response.data) {
                        console.log('Data arrived!')
                        this.sortByCategories()
                    }
                })
        }
    }
</script>

<style>
    .v-catalog{
        margin-top: 30px;
    }

    .catalog__item{
        display: grid;
        grid-template-columns: 234px 1fr;
        column-gap: 15px;
    }

    .catalog__carts__txt{
        display: flex;
        align-items: center;
        justify-content:space-between;
    }

    .catalog__carts__sorting{
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .catalog__carts__sorting-p{
        font-size: var(--fz18);
        margin-right: 12px;
    }

    .catalog__carts__produkcts{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
        margin-top: 32px;
    }

    .filtre-title{
        font-size: var(--fz14);
        margin: 32px 0 12px;
        color: var(--black-color);
    }

    .input-ranges{
        position: relative;
        margin-top: 12px;
        height: 16px;
    }

    .input-ranges-txt{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .input-ranges-txt p{
        font-size: var(--fz14);
        color: var(--black-color);
    }

    .price-input-range{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .price-input-range::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
    }
</style>