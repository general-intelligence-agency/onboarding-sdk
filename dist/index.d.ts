import React from 'react';

interface OnboardingFlowProps {
    onClose?: () => void;
    publicKey: string;
}
declare const OnboardingFlow: React.FC<OnboardingFlowProps>;

export { OnboardingFlow as default };
