<template>
  <div class="bg-white p-4 rounded shadow">
    <h3 class="text-lg font-bold mb-2">
      {{ nombrePaciente }} <span class="text-sm text-gray-500">({{ profesionalNombre }})</span>
    </h3>
    <p>🥸 nombre de paciente: {{ nombrePaciente }}</p>
    <p>📖 motivo consulta: {{ motivoConsulta }}</p>
    <p>📅 fecha cita: {{ fechaCita }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['nombrePaciente', 'motivoConsulta', 'fechaCita', 'profesional'])

const profesionalNombre =
  props.profesional === 'prestado'
    ? 'Juan Valencia'
    : props.profesional === 'disponible'
      ? 'Luisa Martinez'
      : 'No asignado'
</script>
