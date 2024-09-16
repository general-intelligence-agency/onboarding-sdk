"use client";
import { __assign, __rest } from "tslib";
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
var Progress = React.forwardRef(function (_a, ref) {
    var className = _a.className, value = _a.value, props = __rest(_a, ["className", "value"]);
    return (React.createElement(ProgressPrimitive.Root, __assign({ ref: ref, className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className) }, props),
        React.createElement(ProgressPrimitive.Indicator, { className: "h-full w-full flex-1 bg-primary transition-all", style: { transform: "translateX(-".concat(100 - (value || 0), "%)") } })));
});
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress };
//# sourceMappingURL=progress.js.map