
import { CursoService } from './../cursos/curso.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../cursos/curso';
import { map, switchMap } from 'rxjs/operators';



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


  constructor(private fb: FormBuilder,
    private service: CursoService,
    //private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,


  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.minLength(3), Validators.maxLength(50)]],
      descricao: [null, [Validators.minLength(3), Validators.maxLength(50)]],
    });
  }

  hasHerror(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(sucess => {
        //this.modal.showAlertSucess('Curso criado com sucesso');
        this.location.back();
      },
        error => console.log('Erro ao criar curso'));
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}

