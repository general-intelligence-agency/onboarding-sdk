import axios from "axios";

const API_URL = "http://localhost:3000/api/onboarding";

describe("Onboarding API E2E Test", () => {
  it("should successfully submit onboarding data", async () => {
    const onboardingData = {
      firmName: "Law Firm LLC",
      websiteUrl: "https://lawfirm.com",
      firstName: "John",
      lastName: "Doe",
      email: "john@lawfirm.com",
      phoneNumber: "1234567890",
      registrationNumber: "REG123456",
      barAssociationNumber: "BAR789012",
      jurisdiction: "New York",
      ownerFirstName: "Jane",
      ownerLastName: "Smith",
      ownershipPercentage: "100",
      ownerEmail: "jane@lawfirm.com",
      ownerPhoneNumber: "0987654321",
    };

    try {
      const response = await axios.post(API_URL, onboardingData);

      expect(response.status).toBe(200);
      expect(response.data).toEqual({ message: "Onboarding successful" });
    } catch (error) {
      console.error("Error in E2E test:", error);
      throw error;
    }
  });

  it("should return 405 for GET requests", async () => {
    try {
      await axios.get(API_URL);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        expect(error.response.status).toBe(405);
        expect(error.response.data).toEqual({ error: "Method Not Allowed" });
      } else {
        throw error;
      }
    }
  });
});
