<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-blue-800 mb-4">📋 Registro Biblioteca</h2>

    <div v-if="reproducers.length === 0" class="text-gray-500">
      No hay registros en la biblioteca.
    </div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ReproducerCard
        v-for="(reproducer, index) in reproducers"
        :key="index"
        :autor="reproducer.autor"
        :libro="reproducer.libro"
        :edicion="reproducer.edicion"
        :usuario="reproducer.usuario"
      />
    </div>
  </div>
</template>

<script setup>
import { useReproducerStore } from '@/stores/agendaStore'
import ReproducerCard from '@/components/AgendaCard.vue'

const store = useReproducerStore()
const reproducers = store.reproducers
</script>
