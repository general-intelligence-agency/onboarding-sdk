import { __awaiter, __generator } from "tslib";
import axios from "axios";
var API_URL = "http://localhost:3000/api/onboarding";
describe("Onboarding API E2E Test", function () {
    it("should successfully submit onboarding data", function () { return __awaiter(void 0, void 0, void 0, function () {
        var onboardingData, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    onboardingData = {
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
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.post(API_URL, onboardingData)];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.data).toEqual({ message: "Onboarding successful" });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error in E2E test:", error_1);
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it("should return 405 for GET requests", function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get(API_URL)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    if (axios.isAxiosError(error_2) && error_2.response) {
                        expect(error_2.response.status).toBe(405);
                        expect(error_2.response.data).toEqual({ error: "Method Not Allowed" });
                    }
                    else {
                        throw error_2;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=onboarding.test.js.map