"use client";
import { __assign, __awaiter, __generator } from "tslib";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter, } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Check, X, Shield } from "lucide-react";
import { Loader2 } from "lucide-react";
export function OnboardingFlow(_a) {
    var _this = this;
    var onClose = _a.onClose;
    var _b = useState(1), step = _b[0], setStep = _b[1];
    var _c = useState({
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
    }), formData = _c[0], setFormData = _c[1];
    var _d = useState(false), isSubmitting = _d[0], setIsSubmitting = _d[1];
    var _e = useState({}), errors = _e[0], setErrors = _e[1];
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
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
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
                return (<>
            <h2 className="text-xl font-semibold mb-4">
              Law Firm Basic Information
            </h2>
            <div className="space-y-2">
              <Label htmlFor="firmName">Law Firm Name</Label>
              <Input id="firmName" name="firmName" value={formData.firmName} onChange={handleInputChange} required className={errors.firmName ? "border-red-500" : ""}/>
              {errors.firmName && (<p className="text-red-500 text-sm">{errors.firmName}</p>)}
            </div>
            <div className="space-y-2">
              <Label htmlFor="websiteUrl">Website URL</Label>
              <Input id="websiteUrl" name="websiteUrl" type="url" value={formData.websiteUrl} onChange={handleInputChange} className={errors.websiteUrl ? "border-red-500" : ""}/>
              {errors.websiteUrl && (<p className="text-red-500 text-sm">{errors.websiteUrl}</p>)}
            </div>
          </>);
            case 2:
                return (<>
            <h2 className="text-xl font-semibold mb-4">
              Applicant Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required className={errors.firstName ? "border-red-500" : ""}/>
                {errors.firstName && (<p className="text-red-500 text-sm">{errors.firstName}</p>)}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required className={errors.lastName ? "border-red-500" : ""}/>
                {errors.lastName && (<p className="text-red-500 text-sm">{errors.lastName}</p>)}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className={errors.email ? "border-red-500" : ""}/>
              {errors.email && (<p className="text-red-500 text-sm">{errors.email}</p>)}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleInputChange} required className={errors.phoneNumber ? "border-red-500" : ""}/>
              {errors.phoneNumber && (<p className="text-red-500 text-sm">{errors.phoneNumber}</p>)}
            </div>
          </>);
            case 3:
                return (<>
            <h2 className="text-xl font-semibold mb-4">Legal Credentials</h2>
            <div className="space-y-2">
              <Label htmlFor="registrationNumber">Registration Number</Label>
              <Input id="registrationNumber" name="registrationNumber" value={formData.registrationNumber} onChange={handleInputChange} required className={errors.registrationNumber ? "border-red-500" : ""}/>
              {errors.registrationNumber && (<p className="text-red-500 text-sm">
                  {errors.registrationNumber}
                </p>)}
            </div>
            <div className="space-y-2">
              <Label htmlFor="barAssociationNumber">
                Bar Association Number
              </Label>
              <Input id="barAssociationNumber" name="barAssociationNumber" value={formData.barAssociationNumber} onChange={handleInputChange} required className={errors.barAssociationNumber ? "border-red-500" : ""}/>
              {errors.barAssociationNumber && (<p className="text-red-500 text-sm">
                  {errors.barAssociationNumber}
                </p>)}
            </div>
            <div className="space-y-2">
              <Label htmlFor="jurisdiction">Jurisdiction</Label>
              <Input id="jurisdiction" name="jurisdiction" value={formData.jurisdiction} onChange={handleInputChange} required className={errors.jurisdiction ? "border-red-500" : ""}/>
              {errors.jurisdiction && (<p className="text-red-500 text-sm">{errors.jurisdiction}</p>)}
            </div>
          </>);
            case 4:
                return (<>
            <h2 className="text-xl font-semibold mb-4">
              Ownership Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ownerFirstName">Owner First Name</Label>
                <Input id="ownerFirstName" name="ownerFirstName" value={formData.ownerFirstName} onChange={handleInputChange} required className={errors.ownerFirstName ? "border-red-500" : ""}/>
                {errors.ownerFirstName && (<p className="text-red-500 text-sm">
                    {errors.ownerFirstName}
                  </p>)}
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownerLastName">Owner Last Name</Label>
                <Input id="ownerLastName" name="ownerLastName" value={formData.ownerLastName} onChange={handleInputChange} required className={errors.ownerLastName ? "border-red-500" : ""}/>
                {errors.ownerLastName && (<p className="text-red-500 text-sm">{errors.ownerLastName}</p>)}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ownershipPercentage">Ownership Percentage</Label>
              <Input id="ownershipPercentage" name="ownershipPercentage" type="number" min="0" max="100" value={formData.ownershipPercentage} onChange={handleInputChange} required className={errors.ownershipPercentage ? "border-red-500" : ""}/>
              {errors.ownershipPercentage && (<p className="text-red-500 text-sm">
                  {errors.ownershipPercentage}
                </p>)}
            </div>
            <div className="space-y-2">
              <Label htmlFor="ownerEmail">Owner Email</Label>
              <Input id="ownerEmail" name="ownerEmail" type="email" value={formData.ownerEmail} onChange={handleInputChange} required className={errors.ownerEmail ? "border-red-500" : ""}/>
              {errors.ownerEmail && (<p className="text-red-500 text-sm">{errors.ownerEmail}</p>)}
            </div>
            <div className="space-y-2">
              <Label htmlFor="ownerPhoneNumber">Owner Phone Number</Label>
              <Input id="ownerPhoneNumber" name="ownerPhoneNumber" type="tel" value={formData.ownerPhoneNumber} onChange={handleInputChange} required className={errors.ownerPhoneNumber ? "border-red-500" : ""}/>
              {errors.ownerPhoneNumber && (<p className="text-red-500 text-sm">
                  {errors.ownerPhoneNumber}
                </p>)}
            </div>
          </>);
            case 5:
                return (<div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Submission Successful</h2>
            <Check className="w-16 h-16 text-green-500 mx-auto"/>
            <p>
              Please expect an email in the next 24 business hours with an
              account update.
            </p>
          </div>);
            default:
                return null;
        }
    };
    return (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl relative overflow-hidden">
        <Button className="absolute top-2 right-2 p-2" variant="ghost" onClick={onClose}>
          <X className="h-4 w-4"/>
        </Button>
        <CardHeader>
          <CardTitle>Onboarding</CardTitle>
          <CardDescription>Step {step} of 5</CardDescription>
          <Progress value={(step / 5) * 100} className="w-full mt-2"/>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {renderStep()}
            <div className="flex justify-between mt-4">
              {step > 1 && step < 5 && (<Button type="button" variant="outline" onClick={handlePrev}>
                  <ArrowLeft className="mr-2 h-4 w-4"/> Previous
                </Button>)}
              {step < 4 && (<Button type="button" className={step > 1 ? "" : "ml-auto"} onClick={handleNext}>
                  Next <ArrowRight className="ml-2 h-4 w-4"/>
                </Button>)}
              {step === 4 && (<Button type="submit" className="ml-auto" disabled={isSubmitting}>
                  {isSubmitting ? (<>
                      Submitting...{" "}
                      <Loader2 className="ml-2 h-4 w-4 animate-spin"/>
                    </>) : (<>
                      Submit <Check className="ml-2 h-4 w-4"/>
                    </>)}
                </Button>)}
            </div>
          </form>
        </CardContent>
        <CardFooter className="bg-gray-100 text-gray-600 text-xs flex items-center justify-center p-3 rounded-b-lg">
          <Shield className="w-3 h-3 mr-2"/>
          Your data is securely processed and never shared with third parties.
        </CardFooter>
      </Card>
    </div>);
}
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
//# sourceMappingURL=onboarding-flow.jsx.map