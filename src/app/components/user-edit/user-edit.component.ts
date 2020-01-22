import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public page_title: string;
  constructor() { 
    this.page_title = "Ajustes de usuario";
  }

  ngOnInit() {
  }

}
