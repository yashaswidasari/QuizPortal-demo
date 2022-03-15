import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptorProvides } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserdashboardComponent } from './pages/User/userdashboard/userdashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './pages/admin/welcome/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import {MatDividerModule} from '@angular/material/divider';
import { DeleteCategoriesComponent } from './pages/admin/delete-categories/delete-categories.component';
import { UpdateCategoriesComponent } from './pages/admin/update-categories/update-categories.component';
import { ShowQuizzesComponent } from './pages/admin/show-quizzes/show-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddquestionsComponent } from './pages/admin/addquestions/addquestions.component';
import { UpdatequestionComponent } from './pages/admin/updatequestion/updatequestion.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SideBarUserComponent } from './pages/User/side-bar-user/side-bar-user.component';
import { ViewUsercategoriesComponent } from './pages/User/view-usercategories/view-usercategories.component';
import { ViewQuizbycatComponent } from './pages/User/view-quizbycat/view-quizbycat.component';
import { ViewUserquizzesComponent } from './pages/User/view-userquizzes/view-userquizzes.component';
import { PrestartComponent } from './pages/User/prestart/prestart.component';
import { QuizstartedComponent } from './pages/User/quizstarted/quizstarted.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserdashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    DeleteCategoriesComponent,
    UpdateCategoriesComponent,
    ShowQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddquestionsComponent,
    UpdatequestionComponent,
    SideBarUserComponent,
    ViewUsercategoriesComponent,
    ViewQuizbycatComponent,
    ViewUserquizzesComponent,
    PrestartComponent,
    QuizstartedComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })
    
  ],
  providers: [AuthInterceptorProvides],
  bootstrap: [AppComponent]
})
export class AppModule { }
