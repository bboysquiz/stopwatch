<template>
    <button @click="stopTimer(currentTimer.id)">
        <PauseIcon />
    </button>
</template>

<script>
import { mapActions } from 'vuex'
import PauseIcon from './icons/PauseIcon.vue'
export default {
    props: ['currentTimer'],
    components: { PauseIcon },
    methods: {
        ...mapActions(['pauseTimer']),
        stopTimer(id) {
            this.pauseTimer(id)
        },
    }
};
</script>

<style lang="scss" scoped></style>