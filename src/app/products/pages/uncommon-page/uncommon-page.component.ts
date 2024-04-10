import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Carlos';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  public changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18Plural

  public clients: string[] = ['Jose', 'Maria', 'Pedro', 'Ale', 'Alicia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  };

  public deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue pipe
  public person = {
    name: 'Carlos',
    age: 27,
    address: 'Otawa, Canada'
  }

  // Async pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe( tap( value => console.log( 'tap:', value ) ) );

  public promiseValue: Promise<string> = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa' );
      console.log( 'Tenemos data en la promesa' );
      this.person.name = 'Alberto';
    }, 3500 );
  } );

}
