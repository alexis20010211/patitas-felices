import { Injectable } from '@angular/core';
import { Role } from './role.enum';

export interface User {
  username: string;
  role: Role;
}

interface TestUser extends User {
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _currentUser: User | null = null;

  constructor() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this._currentUser = JSON.parse(savedUser);
    }
  }

  get currentUser(): User | null {
    if (!this._currentUser) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        this._currentUser = JSON.parse(savedUser);
      }
    }
    return this._currentUser;
  }

  login(username: string, password: string): User | null {
    const users: TestUser[] = [
      { username: 'admin@patitasfelices.com', password: 'admin', role: Role.Admin },
      { username: 'vet@patitasfelices.com', password: 'vet', role: Role.Veterinario },
      { username: 'cliente1@patitasfelices.com', password: 'cliente', role: Role.Cliente },
      { username: 'cliente2@patitasfelices.com', password: 'cliente', role: Role.Cliente }
    ];

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return null;

    this._currentUser = { username: user.username, role: user.role };
    localStorage.setItem('user', JSON.stringify(this._currentUser));
    return this._currentUser;
  }

  logout() {
    this._currentUser = null;
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}
