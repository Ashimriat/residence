export default function usePlatform() {
  const { isMobile, isDesktop } = useDevice()
  const platform: 'mobile' | 'desktop' = isMobile ? 'mobile' : 'desktop';
  const { $isTMA: isTMA } = useNuxtApp()
  return { platform, isMobile, isDesktop, isTMA };
}