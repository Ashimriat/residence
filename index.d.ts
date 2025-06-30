declare module '#app' {
  type NuxtApp = {
    $isTMA: typeof $fetch
  }
}

export {}