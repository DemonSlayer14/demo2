import { AbstractControl } from "@angular/forms";

export function validMobno(inp: AbstractControl) {
    if (String(inp.value).match(/^[1-9][0-9]{9}$/))
        return null;
    else
        return {
            invalidMobno: true
        }
}