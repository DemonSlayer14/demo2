import { AbstractControl } from "@angular/forms";

export function valid7Day(inp: AbstractControl) {
    let doa = new Date(inp.value);
    let diff: number = doa.getTime() - (new Date()).getTime();
    let oneDay: number = 24 * 60 * 60 * 1000;
    diff = diff / oneDay;
    if (diff > 7 || diff < 1) {
        return {
            invalid7Day: true
        }
    }
    return null;
}