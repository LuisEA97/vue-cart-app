<template>
  <div class="input-container">
    <label class="label" :for="name">{{ label }}</label>
    <input
      ref="inputfield"
      @input="
        validate($event);
        $emit(
          'update:modelValue',
          type === 'number' ? Number($event.target.value) : $event.target.value
        );
      "
      class="input"
      :step="type === 'number' && allowDecimal ? '0.01' : '1'"
      :value="modelValue"
      :type="type"
      :id="name"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      default: "",
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    allowDecimal: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    validate(event) {
      if (event.target.type === "number") {
        if (Number(event.target.value) < 0) this.$refs.inputfield.value = 0;
      }
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0.5rem 0;
}
.label {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: rgba(75, 85, 99, 1);
  cursor: pointer;
  margin-bottom: 0.25rem;
}
.input {
  width: -webkit-fill-available;
  border: 1px solid rgba(156, 163, 175, 1);
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-weight: 600;
  white-space: pre-wrap;
  color: #1f2937;
}
.input:focus {
  outline: 2px solid #0c4a6e;
}
.input::placeholder {
  font-weight: 400;
}
</style>
