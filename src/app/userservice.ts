import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class userservice {
  users: Users[] = [
    {
      id: 1,
      username: 'Dani',
      name: 'Dani',
      password: 'fejlesztes',
      role: 'STUDENT',
      sum_credit: 5,
      e_mail: 'valmi@eamil.com',
    },
    
  ];

  constructor() { }

  public getIssues(): Array<Users> {
    return this.users;
  }
 /*
  public getIssue(id: number): Issue {
    return this.issues.find((issue: Issue) => issue.id === id);
  }

  public createIssue(createdIssue: Issue): void {
    const issue: Issue = new Issue();

    issue.id = Math.floor(Math.random() * 1000);
    issue.code = Math.floor(Math.random() * 3124);
    issue.description = createdIssue.description;
    issue.building_id  = createdIssue.building_id;
    issue.name = createdIssue.name;
    issue.status  = createdIssue.status;
    issue.credit = createdIssue.credit;
    this.issues.push(issue);
  }

  public deleteIssue(id: number): void {
    const issue: Issue = this.getIssue(id);
    const index: number = this.issues.indexOf(issue, 0);

    if (index > -1) {
      this.issues.splice(index, 1);
    }
  }

  public updateIssue(updatedIssue: Issue): void {
    const issue: Issue = this.getIssue(updatedIssue.id);

    issue.description = updatedIssue.description;
    issue.building_id  = updatedIssue.building_id;
    issue.name = updatedIssue.name;
  }
  */
}
