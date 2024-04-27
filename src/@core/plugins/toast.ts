import { toast, type ToastOptions } from 'vue3-toastify'

const notify = (msg: string, status: boolean, autoClose: number) => {
  toast(msg, {
    type: status ? 'success' : 'error',
    autoClose: autoClose ? autoClose : '3000',
  } as ToastOptions)
}

export default notify
