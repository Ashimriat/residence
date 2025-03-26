import type { ShallowRef } from 'vue'

declare module '#app' {
  interface NuxtApp {
    $displayedModalData: ShallowRef<{
      component: Component,
      data: unknown,
      title: string
    }[]>
  }
}

export {}