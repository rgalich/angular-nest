import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
export class FormControlsService {
    validateControls(controls: { [key: string]: AbstractControl; }) {
        for (const i in controls) {
            controls[ i ].markAsDirty();
            controls[ i ].updateValueAndValidity();
        }
    }
}
