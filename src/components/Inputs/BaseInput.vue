<template>
  <div class="form-group">
    <slot name="label">
      <label v-if="label" class="control-label">
        {{ label }}
      </label>
    </slot>
    <slot name="addonLeft">
      <span v-if="addonLeftIcon" class="input-group-prepend">
        <div class="input-group-text">
          <i :class="addonLeftIcon"></i>
        </div>
      </span>
    </slot>
    <slot>
      <input
        :value="value"
        class="form-control"
        aria-describedby="addon-right addon-left"
      />
    </slot>
    <slot name="addonRight">
      <span v-if="addonRightIcon" class="input-group-append">
        <div class="input-group-text">
          <i :class="addonRightIcon"></i>
        </div>
      </span>
    </slot>
    <slot name="helperText"></slot>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: 'base-input',
  props: {
    label: {
      type: String,
      description: 'Input label'
    },
    value: {
      type: [String, Number],
      description: 'Input value'
    },
    addonRightIcon: {
      type: String,
      description: 'Input icon on the right'
    },
    addonLeftIcon: {
      type: String,
      description: 'Input icon on the left'
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  }
}
</script>
<style></style>
