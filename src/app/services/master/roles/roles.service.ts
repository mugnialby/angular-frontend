import { Component, Injectable } from "@angular/core";
import { RoleSaveRequest } from "../../../models/dto/master/roles/requests/RoleSaveRequest";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseUrl } from "../../../config/baseUrl.config";
import { RolePagingRequest } from "../../../models/dto/master/roles/requests/RolePagingRequest";
import { WebResponse } from "../../../models/common/WebResponse";
import { HttpClientMethods } from "../../../models/common/HttpClientMethods";
import { RoleUpdateRequest } from "../../../models/dto/master/roles/requests/RoleUpdateRequest";

@Injectable({
    providedIn: 'root',
})
export class RolesService {

    constructor(private client: HttpClient) {}

    findAll(rolePagingRequest: RolePagingRequest): Observable<WebResponse> {
        const headers = new HttpHeaders({ 'Accept' : 'application/json'});

        let params = new HttpParams()
            .set('page', rolePagingRequest.page)
            .set('pageSize', rolePagingRequest.pageSize);

        return this.client.get<WebResponse>(
            baseUrl.roles,
            { headers, params }
        );
    }

    findById(id: number): Observable<WebResponse> {
        const headers = new HttpHeaders({ 'Accept' : 'application/json'});

        let params = new HttpParams()
            .set('id', id);

        return this.client.get<WebResponse>(
            baseUrl.roles + HttpClientMethods.find,
            { headers, params }
        );
    }

    save(roleSaveRequest: RoleSaveRequest): Observable<WebResponse> {
        const headers = new HttpHeaders({ 'Content-Type' : 'application/json'});

        return this.client.post<WebResponse>(
            baseUrl.roles,
            roleSaveRequest,
            { headers }
        );
    }

    update(roleUpdateRequest: RoleUpdateRequest): Observable<WebResponse> {
        const headers = new HttpHeaders({ 'Content-Type' : 'application/json'});

        return this.client.put<WebResponse>(
            baseUrl.roles,
            roleUpdateRequest,
            { headers }
        );
    }

    delete(id: number): Observable<WebResponse> {
        const headers = new HttpHeaders({ 'Content-Type' : 'application/json'});

        return this.client.delete<WebResponse>(
            baseUrl.roles + "/" + id,
            { headers }
        );
    }
}