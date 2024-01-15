import { Component } from '@angular/core';
import { RoleSaveRequest } from '../../../../../models/dto/master/roles/requests/RoleSaveRequest';
import { RolesService } from '../../../../../services/master/roles/roles.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerComponent } from '../../../utils/error_handler/errorhandler.component';
import { RoleUpdateRequest } from '../../../../../models/dto/master/roles/requests/RoleUpdateRequest';
import { map } from 'rxjs';
import { NgIf } from '@angular/common';
import { Roles } from '../../../../../models/dto/master/roles/roles';

@Component({
  selector: 'app-role-form',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive, 
    FormsModule,
    NgIf
  ],
  templateUrl: './role-form.component.html',
  styleUrl: './role-form.component.css',
  providers: [ 
    RolesService, 
    ErrorHandlerComponent
  ]
})
export class RoleFormComponent {
  constructor(
    private router: Router, 
    private rolesService: RolesService,
    private errorHandler: ErrorHandlerComponent,
    private route: ActivatedRoute
  ) {}

  public isUpdateMode: boolean = false;
  public isDisabled: boolean = false;

  public role: Roles = {
    id: 0,
    roleName: '',
    status: true
  }

  ngOnInit() : void {
    this.route.params.subscribe(params => {
      this.role.id = params['id'];
      this.setIsUpdateMode();

      if (this.isUpdateMode) {
        this.getDataById();
        this.setIsDisabled();
      }
    })
  }

  getDataById(): void {
    this.rolesService
      .findById(this.role.id)
      .pipe(map((response: any) => response.data as Roles))
      .subscribe({
        next: (data) => {
          this.role.roleName = data.roleName;
          this.role.status = data.status;
        },
        error: e => {
          this.errorHandler.handleRequestError(e);
        },
      });
  }

  onSave(): void {
    this.mapSaveRequestToUpperCase();
    this.rolesService
      .save(new RoleSaveRequest(this.role.roleName, "ADMIN"))
      .subscribe({
        next: () => {
          this.clearInputFields();
          this.router.navigate(['/master/roles']);
        },
        error: e => {
          this.errorHandler.handleRequestError(e);
        },
      });
  }

  onUpdate(): void {
    this.mapUpdateRequestToUpperCase();
    this.rolesService
      .update(new RoleUpdateRequest(
        this.role.id, 
        this.role.roleName, 
        this.role.status, 
        "ADMIN"
      ))
      .subscribe({
        next: () => {
          this.clearInputFields();
          this.router.navigate(['/master/roles']);
        },
        error: e => {
          this.errorHandler.handleRequestError(e);
        },
      });
  }

  setIsUpdateMode(): void {
    this.isUpdateMode = this.role.id ? true : false;
  }

  setIsDisabled(): void {
    this.isDisabled = this.role.status;
  }

  clearInputFields(): void {
    this.role.roleName = '';
  }

  mapSaveRequestToUpperCase(): void {
    this.role.roleName = this.role.roleName.trim().toUpperCase();
  }

  mapUpdateRequestToUpperCase(): void {
    this.role.roleName = this.role.roleName.trim().toUpperCase();
  }

  setStatus(): void {
    this.role.status = !this.role.status;
  }
}