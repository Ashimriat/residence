import { EApiRoutes } from '~/composables/useAPI'


export default defineNuxtPlugin(() => {
  const { setUserData } = useUserStore();

  const authTokens = useAuthTokens()

  watch(authTokens, () => {
    console.log("PIPKA")
  })
})