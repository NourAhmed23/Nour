import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { UniqnessValidator } from './../login/validations/Uniqness.validator';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Component, OnInit, Input, ɵɵresolveBody } from '@angular/core';
import { TextValidator } from '../validetor.validation';
import { map } from 'rxjs/operator/map';
import { PostService } from '../service/post.service';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-custmdirctivs',
  templateUrl: './custmdirctivs.component.html',
  styleUrls: ['./custmdirctivs.component.css']
})
export class CustmdirctivsComponent implements OnInit {

  posts;
  url:string='https://jsonplaceholder.typicode.com/posts'


  /*
   creatPost(input:HTMLInputElement){
    let post = {title : input , id: '' }
    this.http.post(this.url , JSON.stringify(post)).subscribe(resbonse=>{
      this.posts.splice(0,0,post)
    })
     */


     //Or

  creatPost(input:HTMLInputElement){
    let post = {title : input.value , id: '1', body:'New Body' }
    this.http.post(this.url , JSON.stringify(post)).subscribe(resbonse=>{
      this.posts.splice(0,0,post)
    })

  }

  updatePost(post , inputTitle){

  let updatepost = {title : inputTitle , id: post.id};
  console.log(updatepost);
  this.http.put(this.url + '/' + post.id, JSON.stringify(updatepost) ).subscribe(resbonse =>{
    let index = this.posts.indexOf(post);
    this.posts[index] = updatepost;
    //Or

    //his.posts[this.posts.indexOf(post)] = resbonse withOut  ==> let index = this.posts.indexOf(post);
  })


  }
  deletePost(post){
    let index = this.posts.indexOf(post);
    this.http.delete(this.url + '/' + post.id).subscribe(resbonse=>{
      this.posts.splice(index, 1)
    })

  }
  obs = Observable.interval(1000).take(3).map((d)=>Date.now).subscribe( a =>{


    console.log(a)

})
  /*
  obs = Observable.interval(1000).take(3).subscribe( a =>{


      console.log(a+1)

  })
*/
  /*
  obs = Observable.interval(1000).subscribe( a =>{
    if(a<=10){
      // return alert ( a )
      console.log(a)
    }
  })
  */
  submit(){
    return this.form.setErrors({invalidlogin : true})
  }

  get age(){
    return this.form.get('age')
  }
  get password(){
    return this.form.get('password')
  }
  get email(){
    return this.form.get('email')
  }
  form: FormGroup;

    constructor(private http:HttpClient) {

      //constructor(private service:PostService) {


      this.form = new FormGroup({
          email: new FormControl('',Validators.required,UniqnessValidator.checkUniquness),
            password: new FormControl('',[TextValidator.noSpaceAllowed]),
            age: new FormControl('', CustomValidators.range([5, 9]))
        });

    }



    ngOnInit(){
  //  this.service.getPosts();

    this.http.get(this.url).subscribe(resbonse=>
      {
        this.posts=resbonse;
      })


    /*
    this.http.get(this.url).subscribe(resbonse=>
      {
        console.log(resbonse)
      })
      */
  }

}
