import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private readonly _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this._usuarioService.getUsers()
      .subscribe( (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      });
  }

}
