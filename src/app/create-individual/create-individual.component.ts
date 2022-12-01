import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Panel } from 'primeng/panel';
import { ToastService } from '../core/services/toast.service';
import { CreateIndividualService } from './create-individual.service';

@Component({
  selector: 'app-create-individual',
  templateUrl: './create-individual.component.html',
  styleUrls: ['./create-individual.component.sass']
})
export class CreateIndividualComponent {

  createForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl(''),
    phone: new FormControl(''),
    birthday: new FormControl(''),
    address: new FormControl(''),
    family: new FormArray([
      new FormGroup({
        firstname: new FormControl('Drew'),
        lastname: new FormControl('Atkison'),
        ageRange: new FormControl(''),
        birthday: new FormControl(''),
        relationship: new FormControl('')
      })
    ]),
    firstTime: new FormControl([]),
    baptized: new FormControl([]),
    holyGhost: new FormControl([]),
    connectedWith: new FormControl([]),
    welcomeEmail: new FormControl(true),
    notes: new FormControl('')
  });
  activeFamilyIndex = [0];
  truefalseOptions = [
    {label: 'Yes', value: 'Y'},
    {label: 'No', value: 'N'},
  ];
  individualsOptions = [
    {
      label: 'Drew Atkison', value: 'id'
    }
  ];
  relationshipOptions = [
    {
      label: 'Father', value: 'father'
    },
    {
      label: 'Mother', value: 'mother'
    },
    {
      label: 'Spouse', value: 'spouse'
    },
    {
      label: 'Son', value: 'son'
    },
    {
      label: 'Daughter', value: 'daughter'
    },
    {
      label: 'Other', value: 'other'
    }
  ];
  ageRangeOptions = [
    {
      label: 'Child', value: 'child'
    },
    {
      label: 'Teenager', value: 'teenager'
    },
    {
      label: 'Young Adult', value: 'youngadult'
    },
    {
      label: 'Adult (25-40)', value: 'adult'
    },
    {
      label: 'Middle Aged', value: 'middleAged'
    },
    {
      label: 'Seniors', value: 'seniors'
    }
  ]

  get family() { return this.createForm.controls['family'] as FormArray; }

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private toastService: ToastService,
    private createIndService: CreateIndividualService
  ) { }

  submitForm() {
    this.markFormDirty();
    if (this.createForm.invalid) {
      this.toastService.showMessage('error', 'Please fill in required fields', 'Form Error');
      return;
    }

    this.createIndService.createNewIndividual(this.createForm.getRawValue())
      .subscribe(result => {
        if (result.error) {
          this.toastService.showMessage('error', 'Error occurred when saving the form!', 'System Error');
          return;
        }

        this.toastService.showMessage('success', result.message, 'Success!');
        this.navigateBackToList();
    });
  }

  navigateBackToList() {
    this.router.navigateByUrl('/main/individuals');
  }

  addNewFamily() {
    this.activeFamilyIndex = [-1];
    this.family.controls.push(new FormGroup({
      firstname: new FormControl('Drew'),
      lastname: new FormControl('Atkison'),
      ageRange: new FormControl(''),
      birthday: new FormControl('')
    }));

    setTimeout(() => {
      this.activeFamilyIndex = [this.family.controls.length - 1];
    }, 500)
  }

  deleteFamilyItem(index) {
    this.family.removeAt(index);

    setTimeout(() => {
      const length = this.family.controls.length;
      this.activeFamilyIndex = [length > 0 ? length - 1: length];
    }, 50);
  }

  markFormDirty() {
    this.createForm.markAllAsTouched();
    this.createForm.updateValueAndValidity();
  }
}
