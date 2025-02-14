import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token:string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLogedIn(){
    return this.getToken() !== null;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({email, password}: any):Observable<any> {
    if(email === 'bhagyashree@gmail.com' && password === 'abc'){
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({name: 'Bhagyashree Chaudhari', email: 'bhagyashree@gmail.com'})
    }
    return throwError(new Error('Failed to login'));
  }
}
