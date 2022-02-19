import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-course-form',
  templateUrl: './contact-course-form.component.html',
  styleUrls: ['./contact-course-form.component.css']
})
export class ContactCourseFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(c){
    console.log(c);
  }
  log(c){
    console.log(c);
  }

  courseMethods = [
    {id: 1, name: 'Development'},
    {id:2, name : 'Specialist' }
  ]
}
