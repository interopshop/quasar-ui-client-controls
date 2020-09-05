import { QBadge } from 'quasar'

export default {
  name: 'ClientControls',

  render (h) {
    return h(QBadge, {
      staticClass: 'ClientControls',
      props: {
        label: 'ClientControls'
      }
    })
  }
}
