import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { IUser } from "src/backend/user"


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn = false;
  currentUser: IUser = null;

  constructor(public firebaseAuth: AngularFireAuth, private router: Router) { }

  async signin(email: string, password: string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
        this.isLoggedIn = true;
        localStorage.setItem('user',JSON.stringify(res.user));
        this.router.navigate(['/landing'])
    }).catch(_error =>{
        console.log(_error);
        this.router.navigate(['/login'])
    })
  }

  async signup(email: string, password: string)
  {
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
      this.router.navigate(['/landing'])
    }).catch(_error =>{
      console.log(_error);
      this.router.navigate(['/signup'])
  })
  }

  logout()
  {
    
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

}
