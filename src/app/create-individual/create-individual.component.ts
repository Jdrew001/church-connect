import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Panel } from 'primeng/panel';

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
        firstname: new FormControl(''),
        lastname: new FormControl(''),
        ageRange: new FormControl(''),
        birthday: new FormControl('')
      })
    ])
  });
  activeFamilyIndex = [0];

  get family() { return this.createForm.controls['family']; }

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  navigateBackToList() {
    this.router.navigateByUrl('/main/individuals');
  }

  addNewFamily() {
    this.family.controls.push(new FormGroup({
      firstname: new FormControl('Drew'),
      lastname: new FormControl('Atkison'),
      ageRange: new FormControl(''),
      birthday: new FormControl('')
    }));

    setTimeout(() => {
      this.activeFamilyIndex = [this.family.controls.length - 1];
    }, 50)
  }

  deleteFamilyItem(index) {
    this.family.removeAt(index);

    setTimeout(() => {
      const length = this.family.controls.length;
      this.activeFamilyIndex = [length > 0 ? length - 1: length];
    }, 50);
  }
}
