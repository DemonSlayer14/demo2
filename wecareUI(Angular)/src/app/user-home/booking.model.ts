export class Booking {
    public constructor(init?: Partial<Booking>) {
        Object.assign(this, init);
    }
    slot: string;
    dateOfAppointment: any;
}