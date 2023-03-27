import { createStore } from 'vuex'

const store = createStore({
    actions: {
        startTimer(ctx, id) {
            ctx.commit('startTimer', id);
            ctx.commit('turnInTimer', id);
        },
        pauseTimer(ctx, id) {
            ctx.commit('pauseTimer', id);
            
        },
        turnOffTimer(ctx, id) {
            ctx.commit('turnOffTimer', id)
        },
        addTimer(ctx, sum) {
            ctx.commit('addTimer', sum)
        },
    },
    mutations: {
        addTimer(state, sum) {
            const newTimer = {
                id: sum++,
                isActive: false,
                hours: '00',
                minutes: '00',
                seconds: '00',
                interval: '',
                hoursCounter: 0,
                minutesCounter: 0,
                secondsCounter: 0
            }
            state.timers.push(newTimer);
        },
        startTimer(state, id) {
            if (state.timers[id].isActive === false) {
                state.timers[id].seconds = `0${state.timers[id].secondsCounter++}`
            }
        },
        pauseTimer(state, id) {
            state.timers[id].isActive = false;
            clearInterval(state.timers[id].interval);
        },
        turnOffTimer(state, id) {
            state.timers[id].isActive = false;
            clearInterval(state.timers[id].interval);
            state.timers[id].hours = '00';
            state.timers[id].minutes = '00';
            state.timers[id].seconds = '00';
            state.timers[id].hoursCounter = 0;
            state.timers[id].minutesCounter = 0;
            state.timers[id].secondsCounter = 0;
        },
        turnInTimer(state, id) {
            if (state.timers[id].isActive === false) {
                state.timers[id].isActive = true;
                state.timers[id].interval = setInterval(() => {
                    if (state.timers[id].secondsCounter < 59) {
                        if (state.timers[id].secondsCounter < 10) {
                            state.timers[id].seconds = `0${state.timers[id].secondsCounter++}`
                        } else {
                            state.timers[id].seconds = state.timers[id].secondsCounter++
                        }
                    } else {
                        state.timers[id].secondsCounter = 0
                        state.timers[id].seconds = `0${state.timers[id].secondsCounter++}`
                        if (state.timers[id].minutesCounter < 59) {
                            if (state.timers[id].minutesCounter < 9) {
                                state.timers[id].minutesCounter++
                                state.timers[id].minutes = `0${state.timers[id].minutesCounter}`
                            } else {
                                state.timers[id].minutesCounter++
                                state.timers[id].minutes = state.timers[id].minutesCounter
                            }
                        } else {
                            state.timers[id].minutesCounter = 0
                            state.timers[id].minutes = `0${state.timers[id].minutesCounter}`
                            if (state.timers[id].hoursCounter < 9) {
                                state.timers[id].hoursCounter++
                                state.timers[id].hours = `0${state.timers[id].hoursCounter}`
                            } else {
                                state.timers[id].hoursCounter++
                                state.timers[id].hours = state.timers[id].hoursCounter
                            }

                        }

                    }
                }, 1000)
            }
        }

    },
    state: {
        timers: [],
    },
    getters: {
        timers(state) {
            return state.timers
        }
    },
})

export default store;