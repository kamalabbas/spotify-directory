import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-artist-registration',
  templateUrl: './artist-registration.component.html',
  styleUrls: ['./artist-registration.component.scss'],
})
export class ArtistRegistrationComponent {
  artistForm!: FormGroup;

  constructor(private fromBuilder: FormBuilder) {
    this.createForm()
  }

  createForm() {
    this.artistForm = this.fromBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: ['', [Validators.required, this.minAgeValidator(25)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^(\+961|961)?\d{8}$/)]        
      ],
      profilePicture: [''],
      stageName: [''],
      artistBackstory: [''],
      startingDate: [''],
      albums: this.fromBuilder.group({
        picture: [''],
        date: [''],
      }),
      songs: this.fromBuilder.group({
        name: [''],
        duration: [''],
      }),
    });
  }

  minAgeValidator(minAge: number) {
    return (control: any) => {
      const currentDate = new Date();
      const birthDate = new Date(control.value);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      return age >= minAge ? null : { tooYoung: true };
    };
  }

  submitForm() {
    console.log(this.artistForm.value);
  }
}
