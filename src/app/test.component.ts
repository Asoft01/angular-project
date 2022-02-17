import { Component, Input } from '@angular/core';

@Component({
    selector: 'test',
    template: `
        <h2> {{ title }} </h2>
        <h2 [textContent]="title"></h2>
        <img src="{{ imageUrl }}"/>
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)"> Save </button>
        </div>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
    // <button class="btn btn-primary" [class.active]="isActive">Save</button>
    // <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    // <input (keyup)="onKeyUp($event)" />
    // <input (keyup.enter) = "onKeyUp($event)" />
    // <input (keyup)= "onKeyUp" />
    // <input #email (keyup.enter)="onKeyUp(email.value)" //
    // <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />

    
})


export class TestComponent{
    title = "String Interpolation and Property Binding";
    imageUrl = "http://lorempixel.com/400/200";
    isActive = false;

    onDivClicked(){
        console.log("Div was clicked");
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    // onKeyUp($event){
    //     if($event.keyCode === 13) console.log("Enter was pressed");
    // }

    // onKeyUp($event){
    //     // console.log("Enter was pressed");
    //     console.log($event.target.value);
    // }

    // onKeyUp(email){
    //     console.log(email);
    // }

    email="lekhad19@gmail.com";
    onKeyUp(){
        console.log(this.email);
    }
}