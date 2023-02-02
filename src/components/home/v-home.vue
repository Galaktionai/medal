<template>
    <div class="v-home">
        <v-banner />
        <v-popular-tovar />
        <v-stocks />
        <v-hot-stock />
    </div>
</template>

<script>
    import vBanner from './v-banner'
    import vPopularTovar from './v-popular-tovar'
    import vStocks from './v-stocks'
    import vHotStock from './v-hot-stock'

    export default {
        name: 'v-home',
        components: {
            vBanner,
            vPopularTovar,
            vStocks,
            vHotStock,
        }
    }
</script>