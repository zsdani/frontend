import { Injectable } from '@angular/core';
import { Users } from "./users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Users[] = [
  {
    id: 1,
    username: 'hkiuw0',
    name: 'Dani',
    password: 'fejlesztes',
    role: 'STUDENT',
    sum_credit: 35,
    e_mail: 'valmi@eamil.com',
  },
  {
    id: 1,
    username: 'neb5x8',
    name: 'Dani',
    password: 'fejlesztes',
    role: 'STUDENT',
    sum_credit: 35,
    e_mail: 'valmi@eadasdasmil.com',
  }
]

  constructor() { }

  getUsers() {
    return this.users;
  }
  
  getUser(id) {
    return this.users.find(i => i.id == id);
  }
}
