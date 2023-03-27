<template>
    <div class="timer__widget">
        <WidgetTime :currentTimer="currentTimer" />
        <div class="timer__button-container">
            <TurnInButton :currentTimer="currentTimer" v-show="currentTimer.isActive === false" />
            <PauseButton :currentTimer="currentTimer" v-show="currentTimer.isActive === true" />
            <TurnOffButton :currentTimer="currentTimer" />
        </div>
    </div>
</template>

<script>
import WidgetTime from './WidgetTime.vue';
import TurnInButton from './TurnInButton.vue';
import TurnOffButton from './TurnOffButton.vue';
import PauseButton from './PauseButton.vue';
export default {
    props: ['currentTimer'],
    components: { WidgetTime, TurnInButton, TurnOffButton, PauseButton },
}
</script>

<style lang="sass" scoped>
.timer
    &__widget 
        background-color: #696969
        width: 225px
        display: flex
        justify-content: center
        flex-wrap: wrap
        padding: 18px 0 16px 0
    &__button
        &-container
            display: flex
            justify-content: space-between
            width: 88px
            padding-top: 20px

</style>