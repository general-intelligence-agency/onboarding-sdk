"use client";

import React from "react";
import { OnboardingFlow } from "@/components/onboarding-flow";

export default function Page({ onClose }: { onClose?: () => void }) {
  return <OnboardingFlow onClose={onClose} />;
}
