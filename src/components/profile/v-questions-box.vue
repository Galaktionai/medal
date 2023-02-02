<template>
    <div class="v-questions-box" v-for="(questions, i) in questionsBase" :key="i">
        <div class="open-questions" @click="closeAllQuestions(questions)">
            <div class="questions__item">
                <h5>
                    {{questions.title}}
                </h5>
                <svg class="questions__item-svg" :class="questions.open ? 'rotate': ''" width="8" height="8">
                    <use xlink:href="../../assets/img/sprite.svg#dropdown"></use>
                </svg>
            </div>
           
            <p class="questions__answer" :class="questions.open ? 'visible' : ''">
                {{questions.answer}}
            </p>

        </div>
        <span class="grey-line"></span>
    </div>
</template>

<script>
    import {ref} from 'vue'

    export default{
        setup() {
            const questionsBase = ref([
                {
                    title: "Название вопроса?",
                    answer: "Таким образом, реализация намеченного плана развития требует от нас анализа ключевых компонентов планируемого обновления? Не следует, однако, забывать о том, что курс на социально-ориентированный национальный проект создаёт предпосылки качественно новых шагов для дальнейших направлений развитая системы массового участия. Значимость этих проблем настолько очевидна, что консультация с профессионалами из IT играет важную роль в формировании существующих финансовых и административных условий.",
                    open: false
                },
                {
                    title: "Название вопроса?",
                    answer: "Таким образом, реализация намеченного плана развития требует от нас анализа ключевых компонентов планируемого обновления? Не следует, однако, забывать о том, что курс на социально-ориентированный национальный проект создаёт предпосылки качественно новых шагов для дальнейших направлений развитая системы массового участия. Значимость этих проблем настолько очевидна, что консультация с профессионалами из IT играет важную роль в формировании существующих финансовых и административных условий.",
                    open: false
                },
                {
                    title: "Название вопроса?",
                    answer: "Таким образом, реализация намеченного плана развития требует от нас анализа ключевых компонентов планируемого обновления? Не следует, однако, забывать о том, что курс на социально-ориентированный национальный проект создаёт предпосылки качественно новых шагов для дальнейших направлений развитая системы массового участия. Значимость этих проблем настолько очевидна, что консультация с профессионалами из IT играет важную роль в формировании существующих финансовых и административных условий.",
                    open: false
                },
                {
                    title: "Название вопроса?",
                    answer: "Таким образом, реализация намеченного плана развития требует от нас анализа ключевых компонентов планируемого обновления? Не следует, однако, забывать о том, что курс на социально-ориентированный национальный проект создаёт предпосылки качественно новых шагов для дальнейших направлений развитая системы массового участия. Значимость этих проблем настолько очевидна, что консультация с профессионалами из IT играет важную роль в формировании существующих финансовых и административных условий.",
                    open: false
                }
            ])
            const closeAllQuestions = (item) => {
                if(!item.open) {
                    questionsBase.value.forEach(el => el.open = false)
                }
                item.open = !item.open;
            }

            return {questionsBase, closeAllQuestions}
        }
    }
</script>

<style>
    .v-questions-box{
        margin: 32px 0;
        cursor: pointer;
    }

    .questions__item{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .questions__item h5{
        font-size: var(--fz24);
        font-weight: 400;
        margin-bottom: 32px;
    }

    .questions__answer{
        visibility: hidden;
        height: 0;
        padding: 0;
        opacity: 0;
        transition: all 0.3s;
    }

    .questions__answer.visible{
        opacity: 1;
        visibility: visible;
        height: 100%;
        padding-bottom: 32px;
    }

    .questions__item-svg{
        margin-bottom: 32px;
        transform: scale(2);
        transition: all 0.3s;
    }

    .questions__item-svg.rotate{
        transform: scale(2) rotate(180deg);
    }
</style>