import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  size = 'large';
  openlink(): void {
    const os = 'android/ios';
     if (os === 'android'){
         //
         location.href = 'andriod 跳转链接 ';
     }else if (os === 'ios')(
       location.href = 'ios 跳转链接 ';
     )else{
      location.href = '其他链接 跳转链接 ';
     }
  }
}


