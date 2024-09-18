# GIA Onboarding SDK

## Installation

```
# NPM
npm i gia-onboarding-sdk

# Yarn
yarn add gia-onboarding-sdk
```

## Usage

Import and use the `OnboardingFlow` component in your React application:

```jsx
import React from "react";
import OnboardingFlow from "gia-onboarding-sdk";
function App() {
  return (
    <div className="App">
      <OnboardingFlow
        onClose={() => {
          console.log("onClose");
        }}
        publicKey="pb_sample_aoyAk1cd8bbqCV7Qb1ElQInkmjgemNy1uXygpW0sW1g"
      />
    </div>
  );
}
export default App;
```

## Props

- `onClose`: Function to be called when the onboarding flow is closed.
- `publicKey`: Your GIA public key.
