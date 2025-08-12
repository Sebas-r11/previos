<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 bg-white p-6 rounded shadow-md">
    <div
      v-if="success"
      class="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded"
    >
      ✅ su cita ha sido agendada exitosamente!
    </div>
    <FormInput
      v-model="nombrePaciente"
      inputLabel="Nombre del Paciente"
      inputName="nombrePaciente"
      placeholder="Ingrese nombre del paciente"
    />
    <FormInput
      v-model="motivoConsulta"
      inputLabel="Motivo de Consulta"
      inputName="motivoConsulta"
      placeholder="Ingrese motivo de consulta"
    />

    <FormInput
      v-model="fechaCita"
      inputLabel="Fecha de Cita"
      inputName="fechaCita"
      inputType="number"
      placeholder="Ingrese el año de la cita"
    />

    <div class="mb-4">
      <label for="type" class="block text-sm font-medium text-gray-700">profesional</label>
      <select v-model="profesional" id="type" class="w-full border px-3 py-2 rounded">
        <option disabled value="">Medico veterinario</option>
        <option value="prestado">🧑‍⚕️Juan Valencia</option>
        <option value="disponible">👩‍⚕️Luisa Martinez</option>
      </select>
    </div>
    <div>
      <vue-cal :events="events" @event-create="onEventCreate" style="height: 600px" />
    </div>

    <BaseButton type="submit">agendar</BaseButton>
  </form>
</template>

<script setup>
const store = useAgendaStore()

const nombrePaciente = ref('')
const motivoConsulta = ref('')
const fechaCita = ref(null)
const profesional = ref('')
const success = ref(false)

// Lógica para Vue Cal
const events = ref([])

function onEventCreate(event) {
  // Puedes personalizar el evento antes de agregarlo
  events.value.push(event)
}

function handleSubmit() {
  if (nombrePaciente.value && motivoConsulta.value && fechaCita.value > 0 && profesional.value) {
    store.addReproducer({
      nombrePaciente: nombrePaciente.value,
      motivoConsulta: motivoConsulta.value,
      fechaCita: fechaCita.value,
      profesional: profesional.value,
    })

    // Agregar evento a Vue Cal
    events.value.push({
      start: fechaCita.value,
      end: fechaCita.value,
      title: `${nombrePaciente.value} - ${motivoConsulta.value} (${profesional.value})`,
    })

    nombrePaciente.value = ''
    motivoConsulta.value = ''
    fechaCita.value = null
    profesional.value = ''
  }

  success.value = true
  setTimeout(() => (success.value = false), 3000)
}
</script>
