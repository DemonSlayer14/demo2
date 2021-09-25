export class Signup {
    public constructor(init?: Partial<Signup>) {
        Object.assign(this, init);
    }
    name: string;
    password: string;
    mobileNumber: number;
    speciality: string;
    dateOfBirth: any;
    gender: string;
}