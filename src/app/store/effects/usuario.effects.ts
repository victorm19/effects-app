import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";
import * as actions from "../actions";

@Injectable()
export class UsuarioEffects {

    constructor(
        private _actions$: Actions,
        private _usuarioService: UsuarioService
        ) {
        
    }

    cargarUsuario$ = createEffect(
        () => this._actions$
        .pipe(
            ofType(actions.cargarUsuario),
            mergeMap(
                ( { id }) => this._usuarioService.getUserById(id)
                .pipe(
                    map(user => actions.cargarUsuarioSuccess({usuario: user})),
                    catchError(err => of(actions.cargarUsuarioError({ payload: err})))
                )
            )
        )
    );
}