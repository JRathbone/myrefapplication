import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { IUser } from "src/backend/user"
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn = false;
  currentUser: IUser = null;
  database: AngularFireDatabase;

  constructor(public firebaseAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.database = db;
    
   }

  async signin(email: string, password: string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
        this.isLoggedIn = true;
        localStorage.setItem('user',JSON.stringify(res.user));
        //this.currentUser = this.database.list('/users', ref => ref.orderByChild('UserUID').equalTo(res.user.uid))[0]
        this.getUserInfo("sup");
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

  async getUserInfo(UserUID: string){
    await this.db.list('/users').valueChanges().subscribe({
      next: users => {
        users.filter(user => console.log(user));
      }
    })
  }

}
