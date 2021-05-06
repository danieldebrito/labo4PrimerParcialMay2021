import { Component, OnInit } from '@angular/core';
import { GitService } from './git.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data; //= [];


  constructor(
    private gitSv: GitService
  ) { 
    this.data = {};
  }

  public getData() {

    this.gitSv.TraerUno().subscribe(response => {
      this.data = response;
      // console.log(this.data);
    });
  }

  ngOnInit(): void {
    this.getData();
  }

}
