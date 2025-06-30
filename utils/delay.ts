export default (duration: number): Promise<void> => new Promise<void>((res) => {
  const timerId = setTimeout(() => {
    clearTimeout(timerId)
    res()
  }, duration)
})