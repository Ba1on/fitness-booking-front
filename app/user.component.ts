import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'user'
})

export class UserComponent implements OnInit {
  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      registerAccountPath: '/api/auth'
    });
  }


  ngOnInit() {}

  register() {
    this._tokenService.registerAccount(
      'test@test.com',
      'password',
      'password'
    );
  }
}