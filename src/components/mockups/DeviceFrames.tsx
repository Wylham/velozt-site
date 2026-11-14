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
    <div className={className}>
      <div className="overflow-hidden rounded-t-[18px] border-[9px] border-b-0 border-ink bg-ink shadow-lift">
        <Scaled width={SCREEN_SIZE.width} height={SCREEN_SIZE.height}>{screens.dashboard}</Scaled>
      </div>
      <div className="relative mx-auto h-3 w-[106%] -translate-x-[2.8%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-200 shadow-soft">
        <span className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-md bg-slate-400/60" />
      </div>
    </div>
  );
}

export function TabletFrame({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[26px] border-[9px] border-ink bg-ink shadow-lift ${className}`}>
      <div className="overflow-hidden rounded-[16px]">
        <Scaled width={900} height={680}>
          <div style={{ width: 900, height: 680 }}>{screens.mesas}</div>
        </Scaled>
      </div>
    </div>
  );
}

export function PhoneFrame({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[30px] border-[7px] border-ink bg-ink shadow-lift ${className}`}>
      <span className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-ink" aria-hidden />
      <div className="overflow-hidden rounded-[23px]">
        <Scaled width={360} height={740}>
          <PhoneOrderScreen />
        </Scaled>
      </div>
    </div>
  );
}
