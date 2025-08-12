import { defineStore } from 'pinia'

export const useAgendaStore = defineStore('agenda', {
  state: () => ({
    events: [],
  }),
  actions: {
    addEvent(event) {
      this.events.push(event)
    },
  },
})
