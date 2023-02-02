<template>
    <div class="v-select">
        <div @click="areOptionVisible = !areOptionVisible" class="catalog__carts__sorting">
            <p class="catalog__carts__sorting-p">{{selected}}</p>
            <svg width="11" height="11">
                <use xlink:href="../../assets/img/sprite.svg#dropdown"></use>
            </svg>
        </div>
        <div class="categories" v-if="areOptionVisible">  
            <p
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>
    export default{
        name: "v-select",
        props: { 
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            selected: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                areOptionVisible: false
            }
        },
        methods: {
            selectOption(option) {
                this.$emit('select', option)
                this.areOptionVisible = false;
            },  
            hideSelect() {
                this.areOptionVisible = false;
            }
        },
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true)
        },
        beforeUnmount() {
            document.removeEventListener('click', this.hideSelect)
        },
    }
</script>

<style>
    .categories p{
        margin: 0;
    }
</style>