import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit, OnDestroy {

  usuario: Usuario | null = null;
  subscriptions: Subscription[] = [];

  constructor(private readonly _route: ActivatedRoute,
              private readonly _store: Store<AppState>) { }
  
  ngOnInit(): void {

    const storeUser = this._store.select('usuario').subscribe( ({ user, loading, error }) => {
      this.usuario = user;
    });

    const route = this._route.params.subscribe( ( { id }) => {
      this._store.dispatch(cargarUsuario({ id }));
    })

    this.subscriptions.push(route);
    this.subscriptions.push(storeUser);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
