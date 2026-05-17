import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,  // ✅ Ensure it's a standalone component
  imports: [CommonModule, FormsModule],  // ✅ Add FormsModule here
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userId: string = '';
  password: string = '';
  role: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (!this.userId || !this.password || !this.role) {
      alert('Please fill in all fields');
      return;
    }

    if (this.userId === 'admin' && this.password === 'admin123' && this.role === 'admin') {
      alert('Admin login successful');
      this.router.navigate(['/admin']);
    } else if (this.userId === 'underwriter' && this.password === 'under123' && this.role === 'underwriter') {
      alert('Underwriter login successful');
      this.router.navigate(['/underwriter']);
    } else {
      alert('Invalid credentials');
    }
  }
}
