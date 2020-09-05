<template>
    <q-badge :label="label" color="secondary"></q-badge>
</template>
<script>
import { QBadge } from 'quasar'
export default {
    name: 'InteropQBadge',
    props: {
        label: {
            type: String,
            required: true,
        }
    },
    components: {
      QBadge
    }
};
</script>