declare class ApiSDK {
    private authToken;
    constructor(authToken: string);
    submitApplication(formData: any): Promise<any>;
}
export default ApiSDK;
