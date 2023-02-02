<template>
    <div class="v-stocks">
        <div class="stock">
            <div class="stock-item">
                <h3 class="stock-item-h3">
                    АКЦИИ
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'v-stocks',
    }
</script>

<style>
    .stock-item{
        padding: 47px 0;
        background-color: var(--red-color);
        margin-bottom: 120px;
    }

    .stock-item-h3{
        text-align: center;
        font-style: italic;
        color: var(--white-color);
        font-size: var(--fz36);
    }
</style>