import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'laptop';

export interface DeviceInfo {
  deviceType: DeviceType;
  isLaptop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  width: number;
  height: number;
  isTouch: boolean;
}

export function useDeviceDetect(): DeviceInfo {
  const getDeviceInfo = (): DeviceInfo => {
    if (typeof window === 'undefined') {
      return {
        deviceType: 'mobile',
        isLaptop: false,
        isTablet: false,
        isMobile: true,
        width: 375,
        height: 667,
        isTouch: true,
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    let deviceType: DeviceType = 'mobile';
    if (width >= 1024) {
      deviceType = 'laptop';
    } else if (width >= 768) {
      deviceType = 'tablet';
    }

    return {
      deviceType,
      isLaptop: deviceType === 'laptop',
      isTablet: deviceType === 'tablet',
      isMobile: deviceType === 'mobile',
      width,
      height,
      isTouch,
    };
  };

  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(getDeviceInfo);

  useEffect(() => {
    const handleResize = () => {
      setDeviceInfo(getDeviceInfo());
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return deviceInfo;
}
