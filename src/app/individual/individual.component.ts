import { Component, OnInit } from '@angular/core';
import { TableConfig } from '../shared/models/table-config.model';
import { IndividualService } from './individual.service';
import { IndividualModel } from './models/individual.model';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.sass']
})
export class IndividualComponent implements OnInit {

  data: Array<IndividualModel> = [];
  configuration: TableConfig = {
    columns: [],
    search: false
  };
  viewType: 'LIST' | 'GRID' = 'LIST';

  constructor(
    private individualService: IndividualService
  ) { }

  ngOnInit(): void {
    this.fetchIndividuals();
  }

  fetchIndividuals() {
    this.individualService.fetchIndividuals().subscribe(result => {
      this.data = result.data.individuals;
      console.log('data', this.data);
      this.configuration = result.data.configuration;
    });
  }

  navigateToCreate() {
    
  }

  changeView(view: 'LIST' | 'GRID') {
    this.viewType = view;
  }

}
