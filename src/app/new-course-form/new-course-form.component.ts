import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})

export class NewCourseFormComponent {
// export class NewCourseFormComponent implements OnInit {
  // categories =  [
  //   {id:1, name: "Development"},
  //   {id: 2, name: "Art"},
  //   {id: 3, name: "Languages"}
  // ]


  // constructor() { }

  // submit(course){
  //   console.log(course);
  // }

  // ngOnInit(): void {
  // }

  // form = new FormGroup({
  //   name : new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone : new FormControl()
  //   }),
  //   topics : new FormArray([])
  // });

  form;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      name : ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  addTopic(topic: HTMLInputElement){
    // (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  };

  // refactoring the code

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }
  
}
