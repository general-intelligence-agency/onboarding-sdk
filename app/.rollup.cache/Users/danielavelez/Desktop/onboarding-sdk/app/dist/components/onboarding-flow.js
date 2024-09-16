"use client";
import { __assign, __awaiter, __generator } from "tslib";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter, } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Check, X, Shield } from "lucide-react";
import { Loader2 } from "lucide-react";
export var OnboardingFlow = function (_a) {
    var _b = _a.onClose, onClose = _b === void 0 ? function () { } : _b;
    var _c = useState(1), step = _c[0], setStep = _c[1];
    var _d = useState({
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
    var _e = useState(false), isSubmitting = _e[0], setIsSubmitting = _e[1];
    var _f = useState({}), errors = _f[0], setErrors = _f[1];
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
                return (React.createElement(React.Fragment, null,
                    React.createElement("h2", { className: "text-xl font-semibold mb-4" }, "Law Firm Basic Information"),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement(Label, { htmlFor: "firmName" }, "Law Firm Name"),
                        React.createElement(Input, { id: "firmName", name: "firmName", value: formData.firmName, onChange: handleInputChange, required: true, className: errors.firmName ? "border-red-500" : "" }),
                        errors.firmName && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.firmName))),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement(Label, { htmlFor: "websiteUrl" }, "Website URL"),
                        React.createElement(Input, { id: "websiteUrl", name: "websiteUrl", type: "url", value: formData.websiteUrl, onChange: handleInputChange, className: errors.websiteUrl ? "border-red-500" : "" }),
                        errors.websiteUrl && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.websiteUrl)))));
            case 2:
                return (React.createElement(React.Fragment, null,
                    React.createElement("h2", { className: "text-xl font-semibold mb-4" }, "Applicant Information"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement(Label, { htmlFor: "firstName" }, "First Name"),
                            React.createElement(Input, { id: "firstName", name: "firstName", value: formData.firstName, onChange: handleInputChange, required: true, className: errors.firstName ? "border-red-500" : "" }),
                            errors.firstName && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.firstName))),
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement(Label, { htmlFor: "lastName" }, "Last Name"),
                            React.createElement(Input, { id: "lastName", name: "lastName", value: formData.lastName, onChange: handleInputChange, required: true, className: errors.lastName ? "border-red-500" : "" }),
                            errors.lastName && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.lastName)))),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement(Label, { htmlFor: "email" }, "Email"),
                        React.createElement(Input, { id: "email", name: "email", type: "email", value: formData.email, onChange: handleInputChange, required: true, className: errors.email ? "border-red-500" : "" }),
                        errors.email && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.email))),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement(Label, { htmlFor: "phoneNumber" }, "Phone Number"),
                        React.createElement(Input, { id: "phoneNumber", name: "phoneNumber", type: "tel", value: formData.phoneNumber, onChange: handleInputChange, required: true, className: errors.phoneNumber ? "border-red-500" : "" }),
                        errors.phoneNumber && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.phoneNumber)))));
            case 3:
                return (React.createElement(React.Fragment, null,
                    React.createElement("h2", { className: "text-xl font-semibold mb-4" }, "Legal Credentials"),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement(Label, { htmlFor: "registrationNumber" }, "Registration Number"),
                        React.createElement(Input, { id: "registrationNumber", name: "registrationNumber", value: formData.registrationNumber, onChange: handleInputChange, required: true, className: errors.registrationNumber ? "border-red-500" : "" }),
                        errors.registrationNumber && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.registrationNumber))),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement(Label, { htmlFor: "barAssociationNumber" }, "Bar Association Number"),
                        React.createElement(Input, { id: "barAssociationNumber", name: "barAssociationNumber", value: formData.barAssociationNumber, onChange: handleInputChange, required: true, className: errors.barAssociationNumber ? "border-red-500" : "" }),
                        errors.barAssociationNumber && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.barAssociationNumber))),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement(Label, { htmlFor: "jurisdiction" }, "Jurisdiction"),
                        React.createElement(Input, { id: "jurisdiction", name: "jurisdiction", value: formData.jurisdiction, onChange: handleInputChange, required: true, className: errors.jurisdiction ? "border-red-500" : "" }),
                        errors.jurisdiction && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.jurisdiction)))));
            case 4:
                return (React.createElement(React.Fragment, null,
                    React.createElement("h2", { className: "text-xl font-semibold mb-4" }, "Ownership Information"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement(Label, { htmlFor: "ownerFirstName" }, "Owner First Name"),
                            React.createElement(Input, { id: "ownerFirstName", name: "ownerFirstName", value: formData.ownerFirstName, onChange: handleInputChange, required: true, className: errors.ownerFirstName ? "border-red-500" : "" }),
                            errors.ownerFirstName && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.ownerFirstName))),
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement(Label, { htmlFor: "ownerLastName" }, "Owner Last Name"),
                            React.createElement(Input, { id: "ownerLastName", name: "ownerLastName", value: formData.ownerLastName, onChange: handleInputChange, required: true, className: errors.ownerLastName ? "border-red-500" : "" }),
                            errors.ownerLastName && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.ownerLastName)))),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement(Label, { htmlFor: "ownershipPercentage" }, "Ownership Percentage"),
                        React.createElement(Input, { id: "ownershipPercentage", name: "ownershipPercentage", type: "number", min: "0", max: "100", value: formData.ownershipPercentage, onChange: handleInputChange, required: true, className: errors.ownershipPercentage ? "border-red-500" : "" }),
                        errors.ownershipPercentage && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.ownershipPercentage))),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement(Label, { htmlFor: "ownerEmail" }, "Owner Email"),
                        React.createElement(Input, { id: "ownerEmail", name: "ownerEmail", type: "email", value: formData.ownerEmail, onChange: handleInputChange, required: true, className: errors.ownerEmail ? "border-red-500" : "" }),
                        errors.ownerEmail && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.ownerEmail))),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement(Label, { htmlFor: "ownerPhoneNumber" }, "Owner Phone Number"),
                        React.createElement(Input, { id: "ownerPhoneNumber", name: "ownerPhoneNumber", type: "tel", value: formData.ownerPhoneNumber, onChange: handleInputChange, required: true, className: errors.ownerPhoneNumber ? "border-red-500" : "" }),
                        errors.ownerPhoneNumber && (React.createElement("p", { className: "text-red-500 text-sm" }, errors.ownerPhoneNumber)))));
            case 5:
                return (React.createElement("div", { className: "text-center space-y-4" },
                    React.createElement("h2", { className: "text-2xl font-bold" }, "Submission Successful"),
                    React.createElement(Check, { className: "w-16 h-16 text-green-500 mx-auto" }),
                    React.createElement("p", null, "Please expect an email in the next 24 business hours with an account update.")));
            default:
                return null;
        }
    };
    return (React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" },
        React.createElement(Card, { className: "w-full max-w-2xl relative overflow-hidden" },
            React.createElement(Button, { className: "absolute top-2 right-2 p-2", variant: "ghost", onClick: onClose },
                React.createElement(X, { className: "h-4 w-4" })),
            React.createElement(CardHeader, null,
                React.createElement(CardTitle, null, "Onboarding"),
                React.createElement(CardDescription, null,
                    "Step ",
                    step,
                    " of 5"),
                React.createElement(Progress, { value: (step / 5) * 100, className: "w-full mt-2" })),
            React.createElement(CardContent, null,
                React.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" },
                    renderStep(),
                    React.createElement("div", { className: "flex justify-between mt-4" },
                        step > 1 && step < 5 && (React.createElement(Button, { type: "button", variant: "outline", onClick: handlePrev },
                            React.createElement(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                            " Previous")),
                        step < 4 && (React.createElement(Button, { type: "button", className: step > 1 ? "" : "ml-auto", onClick: handleNext },
                            "Next ",
                            React.createElement(ArrowRight, { className: "ml-2 h-4 w-4" }))),
                        step === 4 && (React.createElement(Button, { type: "submit", className: "ml-auto", disabled: isSubmitting }, isSubmitting ? (React.createElement(React.Fragment, null,
                            "Submitting...",
                            " ",
                            React.createElement(Loader2, { className: "ml-2 h-4 w-4 animate-spin" }))) : (React.createElement(React.Fragment, null,
                            "Submit ",
                            React.createElement(Check, { className: "ml-2 h-4 w-4" })))))))),
            React.createElement(CardFooter, { className: "bg-gray-100 text-gray-600 text-xs flex items-center justify-center p-3 rounded-b-lg" },
                React.createElement(Shield, { className: "w-3 h-3 mr-2" }),
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
//# sourceMappingURL=onboarding-flow.js.map