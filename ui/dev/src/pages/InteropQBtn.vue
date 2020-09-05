<template>
  <q-page padding>
    <q-btn label="Not Yours"></q-btn>
    <InteropQBtn label="Test" />
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