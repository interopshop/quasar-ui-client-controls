<template>
  <q-page padding>
    <q-btn label="q-btn"></q-btn>
    <hr />
    <InteropQBtn label="Interop-QBtn" />
  </q-page>
</template>
<script>
import { InteropQBtn } from "quasar-ui-client-controls";
export default {
  components: {
    InteropQBtn
  }
}
</script>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>