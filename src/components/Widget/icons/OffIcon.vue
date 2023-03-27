<template>
    <svg :class="{ 'button_active': currentTimer.isActive }" width="20" height="20" viewBox="0 0 20 20" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" fill="#9E9E9E" />
    </svg>
</template>

<script>
export default {
    props: ['currentTimer'],
}
</script>

<style lang="sass" scoped>
.button_active
    rect
        stroke: #FFF
        fill: #FFF
</style>