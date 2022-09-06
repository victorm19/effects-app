import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";
import * as actions from "../actions";

@Injectable()
export class UsuariosEffects {

    constructor(
        private _actions$: Actions,
        private _usuarioService: UsuarioService
        ) {
        
    }

    cargarUsuarios$ = createEffect(
        () => this._actions$
        .pipe(
            ofType(actions.cargarUsuarios),
            mergeMap(
                () => this._usuarioService.getUsers()
                .pipe(
                    map(users => actions.cargarUsuariosSuccess({usuarios: users})),
                    catchError(err => of(actions.cargarUsuariosError({ payload: err})))
                )
            )
        )
    );
}