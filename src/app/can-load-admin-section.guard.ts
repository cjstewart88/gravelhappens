import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanLoadAdminSectionGuard implements CanLoad {
  constructor(
    private router: Router
  ) {}

  canLoad(): Observable<boolean>|Promise<boolean>|boolean {
    if (prompt('Please enter the password.') === 'password') {
      return true;
    } else {
      console.log('bad password');
      this.router.navigate(['/']);
    }
  }
}
