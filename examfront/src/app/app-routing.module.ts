import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AddquestionsComponent } from './pages/admin/addquestions/addquestions.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DeleteCategoriesComponent } from './pages/admin/delete-categories/delete-categories.component';
import { ShowQuizzesComponent } from './pages/admin/show-quizzes/show-quizzes.component';
import { UpdateCategoriesComponent } from './pages/admin/update-categories/update-categories.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { UpdatequestionComponent } from './pages/admin/updatequestion/updatequestion.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PrestartComponent } from './pages/User/prestart/prestart.component';
import { QuizstartedComponent } from './pages/User/quizstarted/quizstarted.component';
import { UserdashboardComponent } from './pages/User/userdashboard/userdashboard.component';
import { ViewQuizbycatComponent } from './pages/User/view-quizbycat/view-quizbycat.component';
import { ViewUsercategoriesComponent } from './pages/User/view-usercategories/view-usercategories.component';
import { ViewUserquizzesComponent } from './pages/User/view-userquizzes/view-userquizzes.component';
import { AdminGuard } from './services/guards/admin.guard';
import { UserDashGuard } from './services/guards/user-dash.guard';
const routes: Routes = [

  {
    path:'signup',
    component: SignupComponent,
    pathMatch: 'full'

  },
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'

  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch: 'full'

  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'viewcategories',
        component:ViewCategoriesComponent
      },
      {
        path:'addcategory',
        component:AddCategoriesComponent
      },
      {
        path:'delcategory',
        component:DeleteCategoriesComponent
      },
      {
        path:'updatecategory',
        component:UpdateCategoriesComponent
      },
      {
        path:'showquizzes',
        component:ShowQuizzesComponent
      },
      {
        path:'addquiz',
        component:AddQuizComponent
      },
      {
        path:'updatequiz/:qidUrl',
        component:UpdateQuizComponent
      },
      {
        path: 'questionsOfQuiz/:qidUrl/:titleUrl',
        component:ViewQuizQuestionsComponent
      },
      {
        path: 'addquestions/:qidUrl/:titleUrl',
        component:AddquestionsComponent
      },
      {
        path: 'updatequestion/:quesidUrl',
        component:UpdatequestionComponent
      },
      
    ]
  },
  {
    path:'user',
    component: UserdashboardComponent,
    canActivate:[UserDashGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'viewusercategories',
        component:ViewUsercategoriesComponent
      },
      {
        path:'viewquizbycat/:cidUrl/:ctitleUrl',
        component:ViewQuizbycatComponent
      },
      {
        path:'viewuserquizzes',
        component:ViewUserquizzesComponent
      },
      {
        path:'prestartquiz/:qidUrl',
        component:PrestartComponent
      },
    ]


  },
  {
    path:'quizstarted/:qidUrl',
    component:QuizstartedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
