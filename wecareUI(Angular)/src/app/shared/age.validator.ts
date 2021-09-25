import { AbstractControl } from "@angular/forms";

export function validAge(inp: AbstractControl) {
    let dob = new Date(inp.value);
    let age = (new Date()).getTime() - dob.getTime();
    age = Math.abs(1970 - (new Date(age)).getFullYear());
    if (age >= 20 && age <= 100)
        return null;
    else
        return {
            invalidAge: true
        }
}