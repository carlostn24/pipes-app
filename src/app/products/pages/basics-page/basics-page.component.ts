import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'carlos';
  public nameUpper: string = 'CARLOS';
  public fullName: string = 'cArLoS TorrEs';

  public customDate: Date = new Date();

}
