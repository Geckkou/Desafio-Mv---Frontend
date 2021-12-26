import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogs-excluir-cliente',
  templateUrl: './dialogs-excluir-cliente.component.html',
  styleUrls: ['./dialogs-excluir-cliente.component.css']
})
export class DialogsExcluirClienteComponent implements OnInit {

  constructor(
    public dialofRef: MatDialogRef<DialogsExcluirClienteComponent>
  ) { }

  ngOnInit(): void {
  }

  excluirCliente() {
    this.dialofRef.close();
  }

  close() {
    this.dialofRef.close();
  }

}
