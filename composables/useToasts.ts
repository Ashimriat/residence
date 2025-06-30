import type { ToastMessageOptions } from 'primevue'

type ToastShowMessageFunc = (
  text: Required<ToastMessageOptions>['summary'],
  detail?: string
) => void

export default function useToasts() {
  const toast = useToast()

  function showToast(
    type: Required<ToastMessageOptions>['severity'],
    text: Required<ToastMessageOptions>['summary'],
    additional?: ToastMessageOptions['detail']
  ): void {
    toast.add({
      severity: type,
      summary: text,
      detail: additional,
      life: 3000,
    })
  }

  const success: ToastShowMessageFunc = (text, detail) => showToast('success', text, detail)
  const info: ToastShowMessageFunc = (text, detail) => showToast('info', text, detail)
  const warn: ToastShowMessageFunc = (text, detail) => showToast('warn', text, detail)
  const error: ToastShowMessageFunc = (text, detail) => showToast('error', text, detail)

  return {
    success,
    info,
    warn,
    error,
  }
}