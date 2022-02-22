import { NotFoundError } from './../common/not-found-error';
import { AppError } from '../common/app-error';
import { PostService } from './../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts: any[];
  // private url = 'https://jsonplaceholder.typicode.com/posts';
  // constructor(private http: HttpClient) {
  //       http.get(this.url)
  //       .subscribe(response => {
  //         this.posts = response.json
  //       })
  //  }

  constructor(private service: PostService){

  }

  ngOnInit(){
    // this.http.get(this.url)
    this.service.getPosts()
      .subscribe(
        response => {
        // console.log(response);
        // This is for post 
        this.posts = response;
        // this.posts = response.json();
      }, 
        // (error: Response) => {
        // if(error.status === 400){
        // this.form.setErrors(error.json());
        (error: AppError) => {
          if(error instanceof AppError){
            // this.form.setErrors(error.originalError);
          }
          else {
            alert('An unexpected error occured.');
            console.log(error);  
          }
      });
  }

  createPost(input : HTMLInputElement){
    let post = {title : input.value };
    input.value = '';
    // this.http.post(this.url, JSON.stringify(post))
      this.service.createPost(post)
      .subscribe(
          response => {
          post['id'] = response.id;
          // this.post.push();
          this.posts.splice(0, 0, post);
          // this.form.setErrors(error.)
          // console.log(response);
      }, 
        error => {
          alert('An unexpected error occured.');
          console.log(error);
      });
  }


  updatePost(post){
    // this.http.put(this.url, JSON.stringify(post));
    // this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true} ))
      this.service.updatePost(post)
      .subscribe(
        response => {
        console.log(response);
      }, 
        error => {
          alert('An unexpected error occured.');
          console.log(error);
      });
  }

  deletePost(post){
    // this.http.delete(this.url + '/' + post.id)
    // this.service.deletePost(post.id)
    this.service.deletePost(34500)
      .subscribe(
        response => {
         let index = this.posts.indexOf(post);
         this.posts.splice(index, 1);
      }, 
        // (error: Response) => {
        //   if(error.status === 404){
        //     alert("This post has already been deleted.");
        //   }else{
        //     alert('An unexpected error occured');
        //     console.log(error);
        //   }

        (error: AppError) => {
          if(error instanceof NotFoundError){
            alert("This post has already been deleted.");
          }else{
            alert('An unexpected error occured');
            console.log(error);
          }
      })
  }
}
