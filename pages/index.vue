<template>
<div class="page index">
  <div class="tcl-container">
    <div class="tcl-panel full-width with-padding">
      <no-ssr><welcome /></no-ssr>
    </div>
  </div>
</div>
</template>

<script>
import Welcome from 'watchout-common-functions/components/Welcome'

export default {
  components: {
    Welcome
  }
}
</script>
