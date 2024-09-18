import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Progress } from "./ui/progress";
import { ArrowLeft, ArrowRight, Check, X, Shield } from "lucide-react";
import { Loader2 } from "lucide-react";

interface OnboardingFlowProps {
  onClose?: () => void;
  publicKey: string;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({
  onClose = () => {},
  publicKey,
}) => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
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
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors({});
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.firmName.trim()) {
        newErrors.firmName = "Law firm name is required";
      }
      if (formData.websiteUrl && !isValidUrl(formData.websiteUrl)) {
        newErrors.websiteUrl = "Please enter a valid URL";
      }
    } else if (currentStep === 2) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!isValidEmail(formData.email))
        newErrors.email = "Please enter a valid email";
      if (!formData.phoneNumber.trim())
        newErrors.phoneNumber = "Phone number is required";
    } else if (currentStep === 3) {
      if (!formData.registrationNumber.trim())
        newErrors.registrationNumber = "Registration number is required";
      if (!formData.barAssociationNumber.trim())
        newErrors.barAssociationNumber = "Bar association number is required";
      if (!formData.jurisdiction.trim())
        newErrors.jurisdiction = "Jurisdiction is required";
    } else if (currentStep === 4) {
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

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `https://api.generalintel.co/api/v1/applications`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicKey}`,
          },
          body: JSON.stringify(formData),
        }
      );
      setStep(5);
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Law Firm Basic Information
            </h2>
            <div className="space-y-2">
              <Label htmlFor="firmName">Law Firm Name</Label>
              <Input
                id="firmName"
                name="firmName"
                value={formData.firmName}
                onChange={handleInputChange}
                required
                className={errors.firmName ? "border-red-500" : ""}
              />
              {errors.firmName && (
                <p className="text-red-500 text-sm">{errors.firmName}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="websiteUrl">Website URL</Label>
              <Input
                id="websiteUrl"
                name="websiteUrl"
                type="url"
                value={formData.websiteUrl}
                onChange={handleInputChange}
                className={errors.websiteUrl ? "border-red-500" : ""}
              />
              {errors.websiteUrl && (
                <p className="text-red-500 text-sm">{errors.websiteUrl}</p>
              )}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Applicant Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className={errors.phoneNumber ? "border-red-500" : ""}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
              )}
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Legal Credentials</h2>
            <div className="space-y-2">
              <Label htmlFor="registrationNumber">Registration Number</Label>
              <Input
                id="registrationNumber"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleInputChange}
                required
                className={errors.registrationNumber ? "border-red-500" : ""}
              />
              {errors.registrationNumber && (
                <p className="text-red-500 text-sm">
                  {errors.registrationNumber}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="barAssociationNumber">
                Bar Association Number
              </Label>
              <Input
                id="barAssociationNumber"
                name="barAssociationNumber"
                value={formData.barAssociationNumber}
                onChange={handleInputChange}
                required
                className={errors.barAssociationNumber ? "border-red-500" : ""}
              />
              {errors.barAssociationNumber && (
                <p className="text-red-500 text-sm">
                  {errors.barAssociationNumber}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="jurisdiction">Jurisdiction</Label>
              <Input
                id="jurisdiction"
                name="jurisdiction"
                value={formData.jurisdiction}
                onChange={handleInputChange}
                required
                className={errors.jurisdiction ? "border-red-500" : ""}
              />
              {errors.jurisdiction && (
                <p className="text-red-500 text-sm">{errors.jurisdiction}</p>
              )}
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Ownership Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ownerFirstName">Owner First Name</Label>
                <Input
                  id="ownerFirstName"
                  name="ownerFirstName"
                  value={formData.ownerFirstName}
                  onChange={handleInputChange}
                  required
                  className={errors.ownerFirstName ? "border-red-500" : ""}
                />
                {errors.ownerFirstName && (
                  <p className="text-red-500 text-sm">
                    {errors.ownerFirstName}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownerLastName">Owner Last Name</Label>
                <Input
                  id="ownerLastName"
                  name="ownerLastName"
                  value={formData.ownerLastName}
                  onChange={handleInputChange}
                  required
                  className={errors.ownerLastName ? "border-red-500" : ""}
                />
                {errors.ownerLastName && (
                  <p className="text-red-500 text-sm">{errors.ownerLastName}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ownershipPercentage">Ownership Percentage</Label>
              <Input
                id="ownershipPercentage"
                name="ownershipPercentage"
                type="number"
                min="0"
                max="100"
                value={formData.ownershipPercentage}
                onChange={handleInputChange}
                required
                className={errors.ownershipPercentage ? "border-red-500" : ""}
              />
              {errors.ownershipPercentage && (
                <p className="text-red-500 text-sm">
                  {errors.ownershipPercentage}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="ownerEmail">Owner Email</Label>
              <Input
                id="ownerEmail"
                name="ownerEmail"
                type="email"
                value={formData.ownerEmail}
                onChange={handleInputChange}
                required
                className={errors.ownerEmail ? "border-red-500" : ""}
              />
              {errors.ownerEmail && (
                <p className="text-red-500 text-sm">{errors.ownerEmail}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="ownerPhoneNumber">Owner Phone Number</Label>
              <Input
                id="ownerPhoneNumber"
                name="ownerPhoneNumber"
                type="tel"
                value={formData.ownerPhoneNumber}
                onChange={handleInputChange}
                required
                className={errors.ownerPhoneNumber ? "border-red-500" : ""}
              />
              {errors.ownerPhoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.ownerPhoneNumber}
                </p>
              )}
            </div>
          </>
        );
      case 5:
        return (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Submission Successful</h2>
            <Check className="w-16 h-16 text-green-500 mx-auto" />
            <p>
              Please expect an email in the next 24 business hours with an
              account update.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl relative overflow-hidden">
        <Button
          className="absolute top-2 right-2 p-2"
          variant="ghost"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        <CardHeader>
          <CardTitle>Onboarding</CardTitle>
          <CardDescription>Step {step} of 5</CardDescription>
          <Progress value={(step / 5) * 100} className="w-full mt-2" />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {renderStep()}
            <div className="flex justify-between mt-4">
              {step > 1 && step < 5 && (
                <Button type="button" variant="outline" onClick={handlePrev}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
              )}
              {step < 4 && (
                <Button
                  type="button"
                  className={step > 1 ? "" : "ml-auto"}
                  onClick={handleNext}
                >
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
              {step === 4 && (
                <Button
                  type="submit"
                  className="ml-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Submitting...{" "}
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Submit <Check className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="bg-gray-100 text-gray-600 text-xs flex items-center justify-center p-3 rounded-b-lg">
          <Shield className="w-3 h-3 mr-2" />
          Your data is securely processed and never shared with third parties.
        </CardFooter>
      </Card>
    </div>
  );
};

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
