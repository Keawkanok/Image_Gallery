import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../chared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isCollapsed = true;

  constructor(public authService: AuthService, public router: Router, public ngZone: NgZone) { }

  ngOnInit(): void {
  }

}
