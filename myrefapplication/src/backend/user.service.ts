import {Injectable, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { IUser } from "src/backend/user"
import { AngularFireDatabase } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  currentUser: IUser;
  ArrayOfUsers: IUser[] = [];
  database: AngularFireDatabase;

  constructor(public firebaseAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.database = db;
    this.db.list<IUser>('/users').valueChanges().subscribe({
      next: users => {
        this.ArrayOfUsers = users
      }
    })
    
    
   }

  ngOnInit(): void {
    
  }


  // user signs into account.
  async signin(email: string, password: string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
        this.currentUser = this.getUser(res.user.uid);
        localStorage.setItem('user',JSON.stringify(this.currentUser));
        this.router.navigate(['/landing'])
    }).catch(_error =>{
        this.router.navigate(['/login'])
    })
  }

  //new user is created if there are no errors
  async signup(name: string, email: string, password: string)
  {
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      localStorage.setItem('user',JSON.stringify(res.user));
      this.createNewUser(res.user.uid,name);
      this.router.navigate(['/landing'])
    }).catch(_error =>{
      console.log(_error);
      this.router.navigate(['/signup'])
  }) 
  }

  // user is logged out 
  logout()
  { 
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

  //user is gathered by their specific UID
  getUser(UserUID: string): IUser {
    
    return this.ArrayOfUsers.filter(user => user.UserUID == UserUID)[0]
  }

  //new user is created
  createNewUser(userUID: string, name: string)
  {
    const databaseReference = this.db.database.ref("/users");

    const newUser = {
      UserUID: userUID,
      careerGamesCompleted: 0,
      displayName: name,
      yearToDateEarnings: 0.00,
      yearlyGamesCompleted: 0,
      yearlyGamesLeft: 0
    }

    databaseReference.push(newUser);
  }

  

  

 
  

  
}
