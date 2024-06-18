import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private router: Router) { }
  isChecked: boolean = false;
  http = inject(HttpClient);
  mailTest = false;
  attemptedSubmit: boolean = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  get isPrivacyPolicyRoute(): boolean {
    return this.router.url === '/privacy-policy';
  }

  contactData = {
    name: "",
    email: "",
    message: ""
  }


  post = {
    endPoint: 'https://sergen-selcik.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.isChecked) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
            this.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && this.isChecked) {
      ngForm.resetForm();
      this.resetForm()
    }
  }

  resetForm() {
    this.contactData.name = '';
    this.contactData.email = '';
    this.contactData.message = '';
    this.isChecked = false;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
    history.pushState(null, '', window.location.pathname);
  }
}
