import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private role: string;   
    usersDate;
    displayedColumns: string[] = ['email', 'name', 'address', 'telephone', 'role', 'button'];
    dataSource: MatTableDataSource<User>;
    itemsPerPage: number[];
    userRoleAdmin = false;   
    isLoggedIn = false;
    showAdminButton = false;
    

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;  

    constructor(
        private usersService: UsersService, 
        private token: TokenStorageService
        ) 
    {        
        this.itemsPerPage = [10, 25, 50, 100];
    }    
    
    ngOnInit() { 
        this.isLoggedIn = !!this.token.getToken();  
        this.load();

        if(this.isLoggedIn){
            this.role = this.token.getUser().role;
            this.showAdminButton = this.role.includes('Admin');
        }
    }        

    load() {
        this.usersService.getUsers().subscribe((users: User[]) => {
            this.dataSource = new MatTableDataSource(users);
             this.dataSource.paginator = this.paginator;
             this.dataSource.sort = this.sort;
            });
    }
    delete(id: number) {
        this.usersService.deleteUser(id).subscribe(data => this.load());
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
      }

}
