import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  public listPath: any = [
    { name: 'Visitor list', path: 'visitor-list', icon: 'list_alt' },
    { name: 'Input visitor', path: 'input_visitor_details', icon: 'post_add' },
    { name: 'Test case', path: 'test-case', icon: 'quiz' }
  ];

  public newDate: string;
  public newTime: number | Date;
  public userName: string;
  public changeText: boolean;

  constructor(
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this.getDate();
  
  }

  onSidenav() {
    this.sidenav.toggle();
  }

  onPath(event: string) {
    this.router.navigateByUrl('/' + event);
  }

  getDate() {
    const event: Date = new Date();
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const utc = 'id-ID'
    this.newDate = event.toLocaleDateString(utc, options);
    setInterval(() => {
      this.newTime = Date.now();
    }, 1000);
  }



}
