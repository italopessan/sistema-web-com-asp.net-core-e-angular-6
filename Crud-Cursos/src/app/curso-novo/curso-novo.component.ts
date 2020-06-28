
import { CursoService } from './../cursos/curso.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../cursos/curso';
import { map, switchMap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-curso-novo',
  templateUrl: './curso-novo.component.html',
  styleUrls: ['./curso-novo.component.css'],
  preserveWhitespaces: true
})
export class CursoNovoComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  curso: Curso[];
  bsModalRef: BsModalRef;
  idCurso: number;


  constructor(private fb: FormBuilder,
    private service: CursoService,
    //private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      nome: [null, [Validators.minLength(3), Validators.maxLength(50)]],
      descricao: [null, [Validators.minLength(3), Validators.maxLength(50)]],
    });

    this.idCurso = this.route.snapshot.params['id'];
    if (!isNullOrUndefined(this.idCurso)) {
      this.route.params.pipe(
        map((params: any) => params['id']),
        switchMap(id => this.service.loadById(id)),
      ).subscribe(curso => this.updateForm(curso));
    }
  }

  updateForm(curso) {

    this.form.patchValue({
      id: curso.id,
      nome: curso.nome,
      descricao: curso.descricao
    });
  }

  hasHerror(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      //console.log(this.form.get('id'))
      if (isNullOrUndefined(this.idCurso)) {
        this.service.create(this.form.value).subscribe(sucess => {
          console.log('sucesso')
          this.location.back();
        },
          error => console.log('Erro ao criar curso'));
      }
      else{
        this.service.update(this.form.value).subscribe(sucess => {
          console.log('sucesso')
          this.location.back();
        },
          error => console.log('Erro ao criar curso'));

      }
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}

