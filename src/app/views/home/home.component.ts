import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogsEditarClientesComponent } from '../dialogs/dialogs-editar-clientes/dialogs-editar-clientes.component';
import { DialogsExcluirClienteComponent } from '../dialogs/dialogs-excluir-cliente/dialogs-excluir-cliente.component';


export interface UserData {
  id: string;
  nome: string;
  cnpj: string;
}

const NOME: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
  'Alexandre',
];

const CNPJ: string[] = [
'19.702/9999-98',
'19.498/9999-05',
'19.499/9999-50',
'19.500/9999-46',
'19.501/9999-90',
'19.502/9999-35',
'19.503/9999-80',
'19.504/9999-24',
'19.505/9999-79',
'19.506/9999-13',
'19.507/9999-68',
'19.508/9999-02',
'19.509/9999-57',
'19.510/9999-81',
'19.511/9999-26',
'19.512/9999-70',
'19.513/9999-15',
'19.514/9999-60',
'19.515/9999-04',
'19.516/9999-59',
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'editar', 'excluir'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
       // cria 100 usuarios
       const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

       // atribui os dadaos para renderizar a tabela
       this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editarClientes(): void {
    const dialogRef = this.dialog.open(DialogsEditarClientesComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Fechando dialog')
    });
  }

  excluirCliente(): void {
    const dialogRef = this.dialog.open(DialogsExcluirClienteComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Fechando dialog')
    });
  }
}

function createNewUser(id: number): UserData {
  const nome =
  NOME[Math.round(Math.random() * (NOME.length - 1))] +
    ' ' +
    NOME[Math.round(Math.random() * (NOME.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    nome: nome,
    cnpj: CNPJ[Math.round(Math.random() * (CNPJ.length - 1))],
  };
}
