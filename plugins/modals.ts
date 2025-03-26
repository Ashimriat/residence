export default defineNuxtPlugin((_nuxtApp) => {
  const displayedModalData = shallowRef<{
    component: Component,
    data: unknown,
  }[]>([])
  
  return {
    provide: {
      displayedModalData,
    }
  }
})
