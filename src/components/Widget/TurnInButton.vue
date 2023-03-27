<template>
    <button @click="turnInTimer(currentTimer.id)" >
        <OnIcon />
    </button>
</template>

<script>
import { mapActions } from 'vuex'
import OnIcon from './icons/OnIcon.vue'
export default {
    props: ['currentTimer'],
    components: { OnIcon },
    methods: {
        ...mapActions(['startTimer']),
        turnInTimer(id) {
            this.startTimer(id)
        }
    },
}
</script>

<style lang="scss" scoped></style>