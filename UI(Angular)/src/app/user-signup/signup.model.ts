export class UserSignup {
    constructor(init?: Partial<UserSignup>) {
        Object.assign(this, init);
    }
    name: string;
    password: string;
    dateOfBirth: string;
    mobileNumber: number;
    pincode: number;
    city: string;
    state: string;
    country: string;
    email: string;
    gender: string
}