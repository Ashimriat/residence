export default function usePlatform() {
  const { isMobile, isDesktop } = useDevice()
  const platform = isMobile ? 'mobile' : 'desktop';
  return { platform, isMobile, isDesktop };
}