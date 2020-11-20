import Dialog from '../lib/Dialog/Dialog.vue';
import { createApp, h } from 'vue'


export const $Dialog = (options: any) => {
  const { clickOverlay,
    title, content, btnColor, icon,
    center, noTitle, noContent, noFooter,
    handleClose
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
        noTitle,
        noContent,
        noFooter,
        handleClose,

      }, {
        title: () => title,
        content: () => content,
      })
    }
  })
  app.mount(div)
}