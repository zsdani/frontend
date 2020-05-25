import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { userservice } from '../userservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: Users = 
    {
      id: 1,
      username: 'hkiuw0',
      name: 'Dani',
      password: 'fejlesztes',
      role: 'STUDENT',
      sum_credit: 35,
      e_mail: 'valmi@eamil.com',
    }
    
  ;
}


/*
export class UserComponent implements OnInit {
  private user: Users[] = [];
*
  constructor(
    private route: ActivatedRoute,
    private issueService: userservice
  ) { }

  ngOnInit(): void {
  }

}*/
