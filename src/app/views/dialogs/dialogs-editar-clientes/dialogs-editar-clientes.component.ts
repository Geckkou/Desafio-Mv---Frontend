import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogs-editar-clientes',
  templateUrl: './dialogs-editar-clientes.component.html',
  styleUrls: ['./dialogs-editar-clientes.component.css']
})
export class DialogsEditarClientesComponent implements OnInit {

  public clientesForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogsEditarClientesComponent>
  ) { }

  ngOnInit(): void {
    this.clientesForm = this.fb.group({
      nome: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      complemento: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      valor: ['', [Validators.required]]
    });
  }

  editarClientes() {
    this.dialogRef.close();
    this.clientesForm.reset();
  }

  close() {
    this.dialogRef.close();
    this.clientesForm.reset();
  }

}
