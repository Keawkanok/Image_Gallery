import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../chared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  focus;
  focus1;

  // showPassword = true;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }


}
