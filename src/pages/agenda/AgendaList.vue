<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-blue-800 mb-4">📋 Registro de Citas</h2>

    <div v-if="reproducers.length === 0" class="text-gray-500">No hay registros de citas.</div>

    <!-- Formulario de edición -->
    <AgendaForm
      v-if="editingIndex !== null"
      :initial-data="reproducers[editingIndex]"
      @save="updateReproducer"
      @cancel="cancelEdit"
    />

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <AgendaCard v-for="(reproducer, index) in reproducers" :key="index" v-bind="reproducer">
        <template #actions>
          <button class="text-blue-600 underline" @click="editReproducer(index)">Editar</button>
        </template>
      </AgendaCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAgendaStore } from '@/stores/agendaStore'
import AgendaCard from '@/components/AgendaCard.vue'
import AgendaForm from '@/components/AgendaForm.vue'

const store = useAgendaStore()
const reproducers = store.events

const editingIndex = ref(null)

function editReproducer(index) {
  editingIndex.value = index
}

function updateReproducer(updated) {
  if (editingIndex.value !== null) {
    store.events[editingIndex.value] = { ...updated }
    editingIndex.value = null
  }
}

function cancelEdit() {
  editingIndex.value = null
}
</script>
