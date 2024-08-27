
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, Subscriber, delay } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidators implements AsyncValidator {

  validate(controls : AbstractControl): Observable <ValidationErrors | null>{
     const email= controls.value;

    const httpCallObservable = new Observable <ValidationErrors | null>((Subscriber)=>{

      console.log({email});


if (email === 'nadiacrasmussen@gmail.com'){
  Subscriber.next({emailTaken:true});
  Subscriber.complete();
}
Subscriber.next(null);
Subscriber.complete();


    }).pipe(
      delay(3000));

      return httpCallObservable;
}
}



  // validate(controls : AbstractControl): Observable <ValidationErrors | null>{
    // const email= controls.value;

    // return of({
      // emailTaken: true,
    // }).pipe(
      // delay(2000)
    // );
  // }
  // constructor() { }



