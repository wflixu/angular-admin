import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[
    `:host ::ng-deep .logo {
    width: 120px;
    height: 31px;
    background: #333;
    border-radius: 6px;
    margin: 16px 28px 16px 0;
    float: left;
  }`
],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
