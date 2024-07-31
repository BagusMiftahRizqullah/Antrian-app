import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testcase',
  templateUrl: './testcase.component.html',
  styleUrls: ['./testcase.component.css']
})
export class TestcaseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changePage(path) {
    this.router.navigate(['/' + path]);
  }

}
