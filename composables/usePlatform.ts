export default function usePlatform() {
  const { isMobile, isDesktop } = useDevice()
  const platform: 'mobile' | 'desktop' = isMobile ? 'mobile' : 'desktop';
  return { platform, isMobile, isDesktop };
}