import type { ReactNode } from "react";
import { PhoneOrderScreen } from "./PhoneOrderScreen";
import { Scaled } from "./Scaled";
import { screens, SCREEN_SIZE } from "./screens";

export function PanelFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`overflow-hidden rounded-2xl border border-line bg-white shadow-lift ${className}`}>{children}</div>;
}

export function ScreenPanel({ screen, className = "" }: { screen: keyof typeof screens; className?: string }) {
  return (
    <PanelFrame className={className}>
      <Scaled width={SCREEN_SIZE.width} height={SCREEN_SIZE.height}>{screens[screen]}</Scaled>
    </PanelFrame>
  );
}

export function LaptopFrame({ className = "" }: { className?: string }) {
  return (
    <DeviceMockup
      className={className}
      device="/dispositivos/macbook.png"
      crop="aspect-[1750/1067]"
      screenClassName="left-[8.5%] top-[1.1%] h-[88.7%] w-[83%]"
      imageClassName="-left-[4.86%] -top-[22%] h-[135%] w-[109.72%]"
    >
      <Scaled width={SCREEN_SIZE.width} height={SCREEN_SIZE.height}>{screens.dashboard}</Scaled>
    </DeviceMockup>
  );
}

type DeviceMockupProps = {
  children: ReactNode;
  className?: string;
  crop: string;
  device: string;
  imageClassName: string;
  screenClassName: string;
};

function DeviceMockup({ children, className = "", crop, device, imageClassName, screenClassName }: DeviceMockupProps) {
  return (
    <div className={`relative overflow-hidden ${crop} ${className}`}>
      <div className={`absolute overflow-hidden ${screenClassName}`}>{children}</div>
      <img src={device} alt="" aria-hidden className={`pointer-events-none absolute max-w-none ${imageClassName}`} />
    </div>
  );
}

export function TabletFrame({ className = "" }: { className?: string }) {
  return (
    <DeviceMockup
      className={className}
      device="/dispositivos/ipad-landscape.png"
      crop="aspect-[1042/797]"
      screenClassName="left-[3.36%] top-[4.64%] flex h-[90.59%] w-[92.71%] items-center overflow-hidden rounded-[3%] bg-white"
      imageClassName="inset-0 h-full w-full"
    >
      <Scaled className="w-full" width={SCREEN_SIZE.width} height={SCREEN_SIZE.height}>{screens.mesas}</Scaled>
    </DeviceMockup>
  );
}

export function PhoneFrame({ className = "" }: { className?: string }) {
  return (
    <DeviceMockup
      className={className}
      device="/dispositivos/iphone.png"
      crop="aspect-[556/1130]"
      screenClassName="left-[3.2%] top-[1%] h-[98%] w-[93.6%] rounded-[10%]"
      imageClassName="-left-[122.7%] -top-[13.7%] h-[127.4%] w-[345.3%]"
    >
      <Scaled width={360} height={740}>
        <PhoneOrderScreen />
      </Scaled>
    </DeviceMockup>
  );
}
