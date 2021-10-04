import { Component, OnInit } from '@angular/core';
import {SubjectsService} from "../../../../../../libs/core-data/src/lib/services/subjects/subjects.service";
import {Subject} from "@choice/api-interfaces";

@Component({
  selector: 'choice-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  subjects: Subject[] | undefined;

  constructor(private subjectsService: SubjectsService) {
  }

  ngOnInit(): void {
    this.loadSubjects();
  }

  loadSubjects() {
    this.subjectsService.all()
      .subscribe(subjects => this.subjects = subjects);
  }
}
