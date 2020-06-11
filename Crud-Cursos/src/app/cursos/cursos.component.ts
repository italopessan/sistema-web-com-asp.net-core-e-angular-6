
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from './curso.service';
import { Curso } from './curso';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  preserveWhitespaces: true
})
export class CursosComponent implements OnInit {

  bsModalRef: BsModalRef;
  cursos$: Observable<Curso[]>
  cursos: Curso[];

  cursoSelecionado: CursoService;

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  constructor(private service: CursoService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    //private modal: AlertModalService,
  ) { }

  ngOnInit() {
    this.cursos$ = this.service.list();
  }

  onEdit(id) {
    this.router.navigate(['/editar', id], { relativeTo: this.route });
  }

  onDelete(curso) {
    this.cursoSelecionado = curso;
    //this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  // onConfirmDelete() {
  //   this.service.remove(this.cursoSelecionado.id)
  //     .subscribe(
  //       success => {
  //         this.deleteModalRef.hide()
  //       },
  //       error => {
  //         this.modal.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
  //         this.deleteModalRef.hide();
  //       }
  //     );
  }




