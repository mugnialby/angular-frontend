import { Component } from '@angular/core';
import { RolesService } from '../../../../../services/master/roles/roles.service';
import { RolePagingRequest } from '../../../../../models/dto/master/roles/requests/RolePagingRequest';
import { map } from 'rxjs';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ErrorHandlerComponent } from '../../../utils/error_handler/errorhandler.component';
import { ToastService } from '../../../../../services/utils/toast/toast.service';
import { Roles } from '../../../../../models/dto/master/roles/roles';
import { FormsModule } from '@angular/forms';
import { Statuses } from '../../../../../models/dto/master/enums/statuses';

@Component({
  selector: 'app-role-grid',
  standalone: true,
  imports: [
    NgFor, 
    NgIf, 
    RouterLink, 
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './role-grid.component.html',
  styleUrl: './role-grid.component.css',
  providers: [ 
    RolesService,
    ErrorHandlerComponent
  ]
})
export class RoleGridComponent {
  public roles: Roles[] = [];
  public loading: boolean = false;
  public error: string | null = null;
  public statuses  = Statuses;

  public roleSearch: RolePagingRequest = {
    roleName: '',
    status: true,
    page: 0,
    pageSize: 10
  }

  constructor(
    private rolesService: RolesService,
    private errorHandler: ErrorHandlerComponent,
    private toastService: ToastService
  ) {}

  ngOnInit() : void {
    this.getData();
  }

  getStatusValues(): string[] {
    return Object.values(this.statuses);
  }

  trackByFunction(index: number, item: any): number {
    return item.id; // Return a unique identifier for the item
  }

  getData() {
    this.rolesService
      .findAll(this.roleSearch)
      .pipe(map((response: any) => response.data as Roles[]))
      .subscribe({
        next: (data) => {
          this.roles = data;
          this.loading = false;
        },
        error: e => {
          this.errorHandler.handleRequestError(e);
        },
      });
  }

  onDelete(roleId: number) {
    this.rolesService
      .delete(roleId)
      .subscribe({
        next: () => {
          this.getData();
          this.toastService.success("hapus data berhasil")
        },
        error: e => {
          this.errorHandler.handleRequestError(e);
        },
      });
  }
}