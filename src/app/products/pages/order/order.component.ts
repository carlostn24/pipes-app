import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  public isUppercase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    }, {
      name: 'Batman',
      canFly: false,
      color: Color.black
    }, {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    }, {
      name: 'Robin',
      canFly: false,
      color: Color.red
    }, {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    }

  ];

  public ngOnInit(): void {

  }

  public toogleUpperCase(): void {
    this.isUppercase = !this.isUppercase;
  }

  public changeOrder( value: keyof Hero ): void {
    this.orderBy = value;
  }
}
