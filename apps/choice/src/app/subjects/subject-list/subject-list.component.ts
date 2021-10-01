import { Component, OnInit } from '@angular/core';
import {SubjectsService} from "../../../../../../libs/core-data/subjects.service";
import {Subject} from "@choice/api-interfaces";

@Component({
  selector: 'choice-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  constructor(private subjectsService: SubjectsService) {
  }

  subjects: Subject[] | undefined;

  ngOnInit(): void {
    this.loadSubjects();
  }

  loadSubjects() {
    this.subjectsService.all()
      .subscribe(subjects => this.subjects = subjects);
  }
}
