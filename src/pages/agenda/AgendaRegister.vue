<template>
  <div class="max-w-2xl mx-auto p-6">
    <h2 class="text-2xl font-bold text-blue-800 mb-6">➕ Realizar Nuevo Registro</h2>

    <AgendaForm />

    <router-link to="/agenda" class="mt-6 inline-block text-sm text-blue-700 hover:underline">
      ← Volver a la lista
    </router-link>
  </div>
</template>

<script setup>
import AgendaForm from '@/components/AgendaForm.vue'
</script>
