<template>
    <div :class="[currentTimer.isActive ? 'widget__time_active' : 'widget__time']">
        <span class="time-hours">{{ timers[currentTimer.id].hours }}</span>
        <span class="time-separator">:</span>
        <span class="time-minutes">{{ timers[currentTimer.id].minutes }}</span>
        <span class="time-separator">:</span>
        <span class="time-seconds">{{ timers[currentTimer.id].seconds }}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters(['timers']),
    props: ['currentTimer'],
}
</script>

<style lang="sass" scoped>
.widget__time
    display: flex
    justify-content: center
    border-bottom: 1px solid #9E9E9E
    width: 100%
    color: #9E9E9E
    line-height: 21.05px
    font-size: 22px
    font-weight: 400
    font-family: Gotham Pro
    padding-bottom: 20px
    &_active
        display: flex
        justify-content: center
        border-bottom: 1px solid #FFF
        width: 100%
        color: #9E9E9E
        line-height: 21.05px
        font-size: 22px
        font-weight: 400
        font-family: Gotham Pro
        padding-bottom: 20px
        span
            color: #fff
</style>