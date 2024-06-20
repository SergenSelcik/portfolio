import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, TranslateModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private router: Router) { }
  isChecked: boolean = false;
  http = inject(HttpClient);
  mailTest = false;
  attemptedSubmit: boolean = false;
  showSuccessMessage = false;
  disappearanceAnimation: boolean = false;
  translate = inject(TranslationService);


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
            this.displaySuccessMessage();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && this.isChecked) {
      ngForm.resetForm();
      this.resetForm()
      this.displaySuccessMessage();
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

  isGerman(): boolean {
    return this.translate.getCurrentLanguage() === 'de';
  }

  displaySuccessMessage() {
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.disappearanceAnimation = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
        this.disappearanceAnimation = false;
      }, 500);
    }, 2500);
  }
}
