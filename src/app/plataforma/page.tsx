import { MarketingRoute } from "@/components/layout/MarketingRoute";
import { Devices } from "@/components/sections/Devices";
import { Features } from "@/components/sections/Features";
import { Platform } from "@/components/sections/Platform";

export default function PlataformaPage() {
  return (
    <MarketingRoute>
      <Platform />
      <Features />
      <Devices />
    </MarketingRoute>
  );
}
