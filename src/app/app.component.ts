import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  coursess: any[];
  
  constructor(db: AngularFireDatabase){
    db.list('/courses')
      .subscribe(coursess => {
        this.coursess = coursess;
        console.log(this.coursess);
      });
  }

  titles = 'hello-angular';
  title: string;

  post = {
    title: 'Title',
    isFavourite: true
  }

  // onFavouriteChanged(isFavourite){
  //   console.log("Favourite Changed: ", isFavourite);
  // }

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs ){
    console.log("Favourite Changed: ", eventArgs);
  }  

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

  
  courses = [1, 2];

  viewMode = 'map';

  coursess;
  
  // coursess = [
  //   {id: 1, name: 'course1'},
  //   {id: 2, name: 'course2'},
  //   {id: 3, name: 'course3'},
  // ];

  // onAdd(){
  //   this.coursess.push({id: 4, name: 'course4'});
  // }

  // onRemove(course){
  //   let index = this.coursess.indexOf(course);
  //   this.coursess.splice(index, 1);
  // }

  loadCourses(){
    this.coursess = [
      {id: 1, name : 'course1'},
      {id: 2, name : 'course2' },
      {id: 3, name : 'course3'}
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  };

  canSave = true;

  task = {
    title : 'Review Application',
    assignee: {
      name: 'John Smith'
    }
  }
}
