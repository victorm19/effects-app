import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as actions from '../actions';

export interface UsuarioState {
    id: string | null,
    user: Usuario | null,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const UsuarioInitialState: UsuarioState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null
}

export const usuarioReducer = createReducer(UsuarioInitialState,

    on(actions.cargarUsuario, (state, { id }) => ({ ...state, loading: true, id })),

    on(actions.cargarUsuarioSuccess, (state, { usuario }) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        user: { ...usuario }
    })),

    on(actions.cargarUsuarioError, (state, { payload }) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

);