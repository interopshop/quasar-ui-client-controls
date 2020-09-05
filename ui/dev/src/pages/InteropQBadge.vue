<template>
  <q-page padding>
    <q-badge label="Not Yours"></q-badge>
    <InteropQBadge label="Test" />
  </q-page>
</template>
<script>
import { InteropQBadge } from "quasar-ui-client-controls";
export default {
  components: {
    InteropQBadge
  }
}
</script>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>