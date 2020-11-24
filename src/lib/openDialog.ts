import { createApp, h } from 'vue'
import Dialog from './Dialog/Dialog.vue';

export const $Dialog = (options: any) => {
  const { clickOverlay,
    title, content, btnColor, icon,bottomBtn,
    center, handleClose
  } = options
  // let div = document.querySelector(".alive-dialog-modal") as Element;
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        "onUpdate:visible": (newVisible: any) => {
          if (newVisible === false) {
            app.unmount(div)
            div.remove()
          }
        },
        clickOverlay,
        btnColor,
        icon,
        center,
        handleClose,
        bottomBtn,
        title,
      }, {
        default: () => content,
      })
    }
  })
  app.mount(div)
}