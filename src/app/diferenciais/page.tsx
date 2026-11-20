import { MarketingRoute } from "@/components/layout/MarketingRoute";
import { Audience } from "@/components/sections/Audience";
import { Differentials } from "@/components/sections/Differentials";

export default function DiferenciaisPage() {
  return (
    <MarketingRoute>
      <Differentials />
      <Audience />
    </MarketingRoute>
  );
}
