import { Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  
  cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  constructor(private _logService: LogService) { }

  getCursos() {
    this._logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }
  
  addCurso(curso: string) {
    this._logService.consoleLog('Adicionando o novo curso ' + curso + ' a lista');
    this.cursos.push(curso);
  }

}
