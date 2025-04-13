export default defineNuxtPlugin(() => {
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
