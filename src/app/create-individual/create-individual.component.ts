import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-create-individual',
  templateUrl: './create-individual.component.html',
  styleUrls: ['./create-individual.component.sass']
})
export class CreateIndividualComponent implements OnInit {

  @ViewChildren('panel') panels: Array<PanelModule>;

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
        birthday: new FormControl('')
      })
    ])
  });
  activeFamily = null;

  get family() { return this.createForm.controls['family']; }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('family', this.family);
  }

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
  }

  deleteFamilyItem(index) {
    this.family.removeAt(index);
  }

  familyPanelToggle(e, index) {
    if(!e.collapsed) {
      this.activeFamily = index;
    }
  }
}
