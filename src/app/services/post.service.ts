import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { PostService } from './post.service';
// import { BadInput } from './../common/bad-input';
// import { NotFoundError } from './../common/not-found-error';
// import { AppError } from '../common/app-error';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';



///////////// First Method Before Extending Post Service /////////////////////
// @Injectable({
//   providedIn: 'root'
// });

// export class PostService {
  
//   private url = 'https://jsonplaceholder.typicode.com/posts';

//   constructor(private http: HttpClient) { }

//   getPosts(){
//     return this.http.get(this.url)
//     .catch(this.handleError);
//   }

//   createPost(post){
//     return this.http.post(this.url, JSON.stringify(post))
//     // .catch((error: Response) => {
//     //   if(error.status === 400)
//     //     return Observable.throw(new BadInput(error.json()));

//     //     return Observable.throw(new AppError(error.json()));
//     // })
//     .catch(this.handleError);
//   }

//   updatePost(post){
//     return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true} ))
//       .catch(this.handleError);
//   }

//   deletePost(id){
//      return this.http.delete(this.url + '/' +id)
//     //  .catch((error: Response) => {
//     //    if(error.status === 404)
//     //     return Observable.throw(new NotFoundError());

//     //     return Observable.throw (new AppError(error));
//     //  });  
//     .catch(this.handleError);
//   }


//   private handleError(error: Response){
//     if(error.status === 400)
//       return Observable.throw(new BadInput(error.json));
    
//     if(error.status === 404)
//       return Observable.throw(new NotFoundError());

//       return Observable.throw(new AppError(new AppError(error)));
//   }
// }

@Injectable()
export class PostService extends DataService {
  
  constructor(http: HttpClient){
    super('https://jsonplaceholder.typicode.com/posts', http);
   }
}