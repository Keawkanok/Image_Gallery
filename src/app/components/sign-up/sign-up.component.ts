import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../chared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // test : Date = new Date();
  focus;
  focus1;
  // focus2;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }


}
