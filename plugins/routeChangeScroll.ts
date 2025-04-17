export default defineNuxtPlugin((nuxtApp) => {
  // @TODO не работает
  nuxtApp.hook('page:finish', async () => {
    await nextTick();
    console.log("PAGE LOADED");
    window.scrollTo(0, 0);
  })
})