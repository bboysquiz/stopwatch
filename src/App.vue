<template>
  <div class="timer">
    <div class="timer__container">
      <ul class="timer__list">
        <li v-for="timer in timers" :key="timer.id" class="timer__list-item">
          <Widget :currentTimer="timer" />
        </li>
        <button @click="addNewTimer(timers.length)" class="timer__add-button timer__list-item">+</button>
      </ul>
    </div>
  </div>
</template>

<script>
import Widget from './components/Widget/Widget.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { Widget },
  computed: mapGetters(['timers']),
  methods: {
    ...mapActions(['addTimer']),
    addNewTimer(length) {
      this.addTimer(length)
    }
  }
}
</script>

<style lang="sass">
.timer 
  background-color: #353638 
  height: 100vh 
  width: 100vw  
  &__container
    display: flex
    width: 775px
    margin: 0 auto
  &__list
    display: flex
    justify-content: flex-start
    flex-wrap: wrap
    width: 775px
    &-item
      margin-top: 45px
      &:nth-child(3n+2)
        margin-left: 50px
        margin-right: 50px
  &__add
    &-button
      width: 225px
      height: 120px
      background-color: #696969
      color: #9E9E9E
      font-size: 45px
      margin-top: 45px
@media screen and (max-width: 768px)
  .timer
    &__container
      width: 500px
    &__list
      &-item
        &:nth-child(3n+2)
          margin-left: inherit
          margin-right: inherit
        &:nth-child(2n+1)
          margin-right: 50px
@media screen and (max-width: 520px)
  .timer
    &__container
      width: 255px
    &__list
      &-item
        &:nth-child(2n+1)
          margin-right: inherit
        
</style>