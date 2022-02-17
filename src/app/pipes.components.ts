import { Component } from '@angular/core';

@Component({
        selector: 'pipes',
        template: `
            {{ course.title | uppercase | lowercase }} <br/>
            {{ course.student | number }} <br/>
            {{ course.rating | number: '2.1-1' }} <br/>
            {{ course.price | currency: 'AUD':true:'3.2-2' }} <br/>
            {{ course.releaseDate | date: 'shortDate' }} <br/>
        `
        
        // {{ text | summary:  }}
})

export class PipesComponent{
    course = {
        title: "HOW TO MAKE PIPES IN ANGULAR",
        rating: 4.9233,
        student: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    text = `I am the person that you gave your phone and you decided not to bother collecting it again! Please can you look into this?`;

}