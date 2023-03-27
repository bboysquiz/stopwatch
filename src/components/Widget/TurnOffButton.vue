<template>
    <button @click="offTimer(currentTimer.id)">
        <OffIcon :currentTimer="currentTimer"/>
    </button>
</template>

<script>
import { mapActions } from 'vuex'
import OffIcon from './icons/OffIcon.vue'
export default {
    props: ['currentTimer'],
    components: { OffIcon },
    methods: {
        ...mapActions(['turnOffTimer']),
        offTimer(id) {
            this.turnOffTimer(id)
        },
    }
};
</script>

<style lang="scss" scoped></style>