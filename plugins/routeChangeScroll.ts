export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', async () => {
    await nextTick();
    console.log("PAGE LOADED");
    window.scrollTo(0, 0);
  })
})