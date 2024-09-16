import { __awaiter, __generator } from "tslib";
export default function handler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (req.method !== "POST") {
                        return [2 /*return*/, res.status(405).json({ error: "Method Not Allowed" })];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://generalintel.co/api/applications", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(req.body),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    console.log("Form submitted:", result);
                    return [2 /*return*/, res.status(200).json({ message: "Onboarding successful" })];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error submitting form:", error_1);
                    return [2 /*return*/, res.status(500).json({ error: "Internal Server Error" })];
                case 5: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=onboarding.js.map