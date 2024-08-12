import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

    authenticate(username2:string,password2:string){

         if(username2=='admin'&&password2=='admin'){

             sessionStorage.setItem('username2',username2);
             return true
         }
         else{
          return false
         }
    }


    isUserLoggedIn(){

        console.log("Admin login Successful....")
       let user= sessionStorage.getItem('username2');

       return !(user==null)

    }

    logout(){

        console.log("Admin log Out Successful....")
         sessionStorage.removeItem('username2');
    }
    
    

  }
