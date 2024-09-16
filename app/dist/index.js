'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var LabelPrimitive = require('@radix-ui/react-label');
var ProgressPrimitive = require('@radix-ui/react-progress');
var lucideReact = require('lucide-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var ProgressPrimitive__namespace = /*#__PURE__*/_interopNamespace(ProgressPrimitive);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function cn() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return tailwindMerge.twMerge(clsx.clsx(inputs));
}

var buttonVariants = classVarianceAuthority.cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
var Button = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, variant = _a.variant, size = _a.size, _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = __rest(_a, ["className", "variant", "size", "asChild"]);
    var Comp = asChild ? reactSlot.Slot : "button";
    return (React__namespace.createElement(Comp, __assign({ className: cn(buttonVariants({ variant: variant, size: size, className: className })), ref: ref }, props)));
});
Button.displayName = "Button";

var Input = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, type = _a.type, props = __rest(_a, ["className", "type"]);
    return (React__namespace.createElement("input", __assign({ type: type, className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className), ref: ref }, props)));
});
Input.displayName = "Input";

var labelVariants = classVarianceAuthority.cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React__namespace.createElement(LabelPrimitive__namespace.Root, __assign({ ref: ref, className: cn(labelVariants(), className) }, props)));
});
Label.displayName = LabelPrimitive__namespace.Root.displayName;

var Card = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React__namespace.createElement("div", __assign({ ref: ref, className: cn("rounded-xl border bg-card text-card-foreground shadow", className) }, props)));
});
Card.displayName = "Card";
var CardHeader = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React__namespace.createElement("div", __assign({ ref: ref, className: cn("flex flex-col space-y-1.5 p-6", className) }, props)));
});
CardHeader.displayName = "CardHeader";
var CardTitle = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React__namespace.createElement("h3", __assign({ ref: ref, className: cn("font-semibold leading-none tracking-tight", className) }, props)));
});
CardTitle.displayName = "CardTitle";
var CardDescription = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React__namespace.createElement("p", __assign({ ref: ref, className: cn("text-sm text-muted-foreground", className) }, props)));
});
CardDescription.displayName = "CardDescription";
var CardContent = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React__namespace.createElement("div", __assign({ ref: ref, className: cn("p-6 pt-0", className) }, props)));
});
CardContent.displayName = "CardContent";
var CardFooter = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React__namespace.createElement("div", __assign({ ref: ref, className: cn("flex items-center p-6 pt-0", className) }, props)));
});
CardFooter.displayName = "CardFooter";

var Progress = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, value = _a.value, props = __rest(_a, ["className", "value"]);
    return (React__namespace.createElement(ProgressPrimitive__namespace.Root, __assign({ ref: ref, className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className) }, props),
        React__namespace.createElement(ProgressPrimitive__namespace.Indicator, { className: "h-full w-full flex-1 bg-primary transition-all", style: { transform: "translateX(-".concat(100 - (value || 0), "%)") } })));
});
Progress.displayName = ProgressPrimitive__namespace.Root.displayName;

var OnboardingFlow = function (_a) {
    var _b = _a.onClose, onClose = _b === void 0 ? function () { } : _b;
    var _c = React.useState(1), step = _c[0], setStep = _c[1];
    var _d = React.useState({
        firmName: "",
        websiteUrl: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        registrationNumber: "",
        barAssociationNumber: "",
        jurisdiction: "",
        ownerFirstName: "",
        ownerLastName: "",
        ownershipPercentage: "",
        ownerEmail: "",
        ownerPhoneNumber: "",
    }), formData = _d[0], setFormData = _d[1];
    var _e = React.useState(false), isSubmitting = _e[0], setIsSubmitting = _e[1];
    var _f = React.useState({}), errors = _f[0], setErrors = _f[1];
    var handleInputChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prevData) {
            var _a;
            return (__assign(__assign({}, prevData), (_a = {}, _a[name] = value, _a)));
        });
        setErrors({});
    };
    var validateStep = function (currentStep) {
        var newErrors = {};
        if (currentStep === 1) {
            if (!formData.firmName.trim()) {
                newErrors.firmName = "Law firm name is required";
            }
            if (formData.websiteUrl && !isValidUrl(formData.websiteUrl)) {
                newErrors.websiteUrl = "Please enter a valid URL";
            }
        }
        else if (currentStep === 2) {
            if (!formData.firstName.trim())
                newErrors.firstName = "First name is required";
            if (!formData.lastName.trim())
                newErrors.lastName = "Last name is required";
            if (!formData.email.trim())
                newErrors.email = "Email is required";
            else if (!isValidEmail(formData.email))
                newErrors.email = "Please enter a valid email";
            if (!formData.phoneNumber.trim())
                newErrors.phoneNumber = "Phone number is required";
        }
        else if (currentStep === 3) {
            if (!formData.registrationNumber.trim())
                newErrors.registrationNumber = "Registration number is required";
            if (!formData.barAssociationNumber.trim())
                newErrors.barAssociationNumber = "Bar association number is required";
            if (!formData.jurisdiction.trim())
                newErrors.jurisdiction = "Jurisdiction is required";
        }
        else if (currentStep === 4) {
            if (!formData.ownerFirstName.trim())
                newErrors.ownerFirstName = "Owner first name is required";
            if (!formData.ownerLastName.trim())
                newErrors.ownerLastName = "Owner last name is required";
            if (!formData.ownershipPercentage.trim())
                newErrors.ownershipPercentage = "Ownership percentage is required";
            if (!formData.ownerEmail.trim())
                newErrors.ownerEmail = "Owner email is required";
            else if (!isValidEmail(formData.ownerEmail))
                newErrors.ownerEmail = "Please enter a valid email";
            if (!formData.ownerPhoneNumber.trim())
                newErrors.ownerPhoneNumber = "Owner phone number is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    var handleNext = function () {
        if (validateStep(step)) {
            setStep(function (prevStep) { return prevStep + 1; });
        }
    };
    var handlePrev = function () { return setStep(function (prevStep) { return prevStep - 1; }); };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, fetch("/api/onboarding", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formData),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    setStep(5);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error submitting application:", error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var renderStep = function () {
        switch (step) {
            case 1:
                return (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement("h2", { className: "text-xl font-semibold mb-4" }, "Law Firm Basic Information"),
                    React__default["default"].createElement("div", { className: "space-y-2" },
                        React__default["default"].createElement(Label, { htmlFor: "firmName" }, "Law Firm Name"),
                        React__default["default"].createElement(Input, { id: "firmName", name: "firmName", value: formData.firmName, onChange: handleInputChange, required: true, className: errors.firmName ? "border-red-500" : "" }),
                        errors.firmName && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.firmName))),
                    React__default["default"].createElement("div", { className: "space-y-2" },
                        React__default["default"].createElement(Label, { htmlFor: "websiteUrl" }, "Website URL"),
                        React__default["default"].createElement(Input, { id: "websiteUrl", name: "websiteUrl", type: "url", value: formData.websiteUrl, onChange: handleInputChange, className: errors.websiteUrl ? "border-red-500" : "" }),
                        errors.websiteUrl && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.websiteUrl)))));
            case 2:
                return (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement("h2", { className: "text-xl font-semibold mb-4" }, "Applicant Information"),
                    React__default["default"].createElement("div", { className: "grid grid-cols-2 gap-4" },
                        React__default["default"].createElement("div", { className: "space-y-2" },
                            React__default["default"].createElement(Label, { htmlFor: "firstName" }, "First Name"),
                            React__default["default"].createElement(Input, { id: "firstName", name: "firstName", value: formData.firstName, onChange: handleInputChange, required: true, className: errors.firstName ? "border-red-500" : "" }),
                            errors.firstName && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.firstName))),
                        React__default["default"].createElement("div", { className: "space-y-2" },
                            React__default["default"].createElement(Label, { htmlFor: "lastName" }, "Last Name"),
                            React__default["default"].createElement(Input, { id: "lastName", name: "lastName", value: formData.lastName, onChange: handleInputChange, required: true, className: errors.lastName ? "border-red-500" : "" }),
                            errors.lastName && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.lastName)))),
                    React__default["default"].createElement("div", { className: "space-y-2" },
                        React__default["default"].createElement(Label, { htmlFor: "email" }, "Email"),
                        React__default["default"].createElement(Input, { id: "email", name: "email", type: "email", value: formData.email, onChange: handleInputChange, required: true, className: errors.email ? "border-red-500" : "" }),
                        errors.email && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.email))),
                    React__default["default"].createElement("div", { className: "space-y-2" },
                        React__default["default"].createElement(Label, { htmlFor: "phoneNumber" }, "Phone Number"),
                        React__default["default"].createElement(Input, { id: "phoneNumber", name: "phoneNumber", type: "tel", value: formData.phoneNumber, onChange: handleInputChange, required: true, className: errors.phoneNumber ? "border-red-500" : "" }),
                        errors.phoneNumber && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.phoneNumber)))));
            case 3:
                return (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement("h2", { className: "text-xl font-semibold mb-4" }, "Legal Credentials"),
                    React__default["default"].createElement("div", { className: "space-y-2" },
                        React__default["default"].createElement(Label, { htmlFor: "registrationNumber" }, "Registration Number"),
                        React__default["default"].createElement(Input, { id: "registrationNumber", name: "registrationNumber", value: formData.registrationNumber, onChange: handleInputChange, required: true, className: errors.registrationNumber ? "border-red-500" : "" }),
                        errors.registrationNumber && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.registrationNumber))),
                    React__default["default"].createElement("div", { className: "space-y-2" },
                        React__default["default"].createElement(Label, { htmlFor: "barAssociationNumber" }, "Bar Association Number"),
                        React__default["default"].createElement(Input, { id: "barAssociationNumber", name: "barAssociationNumber", value: formData.barAssociationNumber, onChange: handleInputChange, required: true, className: errors.barAssociationNumber ? "border-red-500" : "" }),
                        errors.barAssociationNumber && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.barAssociationNumber))),
                    React__default["default"].createElement("div", { className: "space-y-2" },
                        React__default["default"].createElement(Label, { htmlFor: "jurisdiction" }, "Jurisdiction"),
                        React__default["default"].createElement(Input, { id: "jurisdiction", name: "jurisdiction", value: formData.jurisdiction, onChange: handleInputChange, required: true, className: errors.jurisdiction ? "border-red-500" : "" }),
                        errors.jurisdiction && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.jurisdiction)))));
            case 4:
                return (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement("h2", { className: "text-xl font-semibold mb-4" }, "Ownership Information"),
                    React__default["default"].createElement("div", { className: "grid grid-cols-2 gap-4" },
                        React__default["default"].createElement("div", { className: "space-y-2" },
                            React__default["default"].createElement(Label, { htmlFor: "ownerFirstName" }, "Owner First Name"),
                            React__default["default"].createElement(Input, { id: "ownerFirstName", name: "ownerFirstName", value: formData.ownerFirstName, onChange: handleInputChange, required: true, className: errors.ownerFirstName ? "border-red-500" : "" }),
                            errors.ownerFirstName && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.ownerFirstName))),
                        React__default["default"].createElement("div", { className: "space-y-2" },
                            React__default["default"].createElement(Label, { htmlFor: "ownerLastName" }, "Owner Last Name"),
                            React__default["default"].createElement(Input, { id: "ownerLastName", name: "ownerLastName", value: formData.ownerLastName, onChange: handleInputChange, required: true, className: errors.ownerLastName ? "border-red-500" : "" }),
                            errors.ownerLastName && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.ownerLastName)))),
                    React__default["default"].createElement("div", { className: "space-y-2" },
                        React__default["default"].createElement(Label, { htmlFor: "ownershipPercentage" }, "Ownership Percentage"),
                        React__default["default"].createElement(Input, { id: "ownershipPercentage", name: "ownershipPercentage", type: "number", min: "0", max: "100", value: formData.ownershipPercentage, onChange: handleInputChange, required: true, className: errors.ownershipPercentage ? "border-red-500" : "" }),
                        errors.ownershipPercentage && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.ownershipPercentage))),
                    React__default["default"].createElement("div", { className: "space-y-2" },
                        React__default["default"].createElement(Label, { htmlFor: "ownerEmail" }, "Owner Email"),
                        React__default["default"].createElement(Input, { id: "ownerEmail", name: "ownerEmail", type: "email", value: formData.ownerEmail, onChange: handleInputChange, required: true, className: errors.ownerEmail ? "border-red-500" : "" }),
                        errors.ownerEmail && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.ownerEmail))),
                    React__default["default"].createElement("div", { className: "space-y-2" },
                        React__default["default"].createElement(Label, { htmlFor: "ownerPhoneNumber" }, "Owner Phone Number"),
                        React__default["default"].createElement(Input, { id: "ownerPhoneNumber", name: "ownerPhoneNumber", type: "tel", value: formData.ownerPhoneNumber, onChange: handleInputChange, required: true, className: errors.ownerPhoneNumber ? "border-red-500" : "" }),
                        errors.ownerPhoneNumber && (React__default["default"].createElement("p", { className: "text-red-500 text-sm" }, errors.ownerPhoneNumber)))));
            case 5:
                return (React__default["default"].createElement("div", { className: "text-center space-y-4" },
                    React__default["default"].createElement("h2", { className: "text-2xl font-bold" }, "Submission Successful"),
                    React__default["default"].createElement(lucideReact.Check, { className: "w-16 h-16 text-green-500 mx-auto" }),
                    React__default["default"].createElement("p", null, "Please expect an email in the next 24 business hours with an account update.")));
            default:
                return null;
        }
    };
    return (React__default["default"].createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" },
        React__default["default"].createElement(Card, { className: "w-full max-w-2xl relative overflow-hidden" },
            React__default["default"].createElement(Button, { className: "absolute top-2 right-2 p-2", variant: "ghost", onClick: onClose },
                React__default["default"].createElement(lucideReact.X, { className: "h-4 w-4" })),
            React__default["default"].createElement(CardHeader, null,
                React__default["default"].createElement(CardTitle, null, "Onboarding"),
                React__default["default"].createElement(CardDescription, null,
                    "Step ",
                    step,
                    " of 5"),
                React__default["default"].createElement(Progress, { value: (step / 5) * 100, className: "w-full mt-2" })),
            React__default["default"].createElement(CardContent, null,
                React__default["default"].createElement("form", { onSubmit: handleSubmit, className: "space-y-4" },
                    renderStep(),
                    React__default["default"].createElement("div", { className: "flex justify-between mt-4" },
                        step > 1 && step < 5 && (React__default["default"].createElement(Button, { type: "button", variant: "outline", onClick: handlePrev },
                            React__default["default"].createElement(lucideReact.ArrowLeft, { className: "mr-2 h-4 w-4" }),
                            " Previous")),
                        step < 4 && (React__default["default"].createElement(Button, { type: "button", className: step > 1 ? "" : "ml-auto", onClick: handleNext },
                            "Next ",
                            React__default["default"].createElement(lucideReact.ArrowRight, { className: "ml-2 h-4 w-4" }))),
                        step === 4 && (React__default["default"].createElement(Button, { type: "submit", className: "ml-auto", disabled: isSubmitting }, isSubmitting ? (React__default["default"].createElement(React__default["default"].Fragment, null,
                            "Submitting...",
                            " ",
                            React__default["default"].createElement(lucideReact.Loader2, { className: "ml-2 h-4 w-4 animate-spin" }))) : (React__default["default"].createElement(React__default["default"].Fragment, null,
                            "Submit ",
                            React__default["default"].createElement(lucideReact.Check, { className: "ml-2 h-4 w-4" })))))))),
            React__default["default"].createElement(CardFooter, { className: "bg-gray-100 text-gray-600 text-xs flex items-center justify-center p-3 rounded-b-lg" },
                React__default["default"].createElement(lucideReact.Shield, { className: "w-3 h-3 mr-2" }),
                "Your data is securely processed and never shared with third parties."))));
};
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    }
    catch (_a) {
        return false;
    }
}
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

exports.OnboardingFlow = OnboardingFlow;
//# sourceMappingURL=index.js.map
