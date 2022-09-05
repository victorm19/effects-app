import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private readonly _router: Router) { }

  ngOnInit(): void {
  }

  irUsuario(idUsuario: string) {
    if(!idUsuario) 
      return;
    else
      this._router.navigate(['/usuario', idUsuario])
  }

}
