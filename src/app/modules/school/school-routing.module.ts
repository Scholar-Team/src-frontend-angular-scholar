import { TeachersComponent } from './components/teachers/teachers.component';
import { StudentsComponent } from './components/students/students.component';
import { DisciplinesComponent } from './components/disciplines/disciplines.component';
import { ClassroomsComponent } from './components/classrooms/classrooms.component';
import { PeriodsComponent } from './components/periods/periods.component';
import { RegisterActivityComponent } from './components/register-activity/register-activity.component';
import { RegisterClassComponent } from './components/register-class/register-class.component';
import { RegisterTeacherComponent } from './components/register-teacher/register-teacher.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { RegisterDisciplineComponent } from './components/register-discipline/register-discipline.component';
import { RegisterClassroomComponent } from './components/register-classroom/register-classroom.component';
import { RegisterPeriodComponent } from './components/register-period/register-period.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@core/guards/auth.guard';

import { DirectorPageComponent } from './pages/director-page/director-page.component';
import { TeacherPageComponent } from './pages/teacher-page/teacher-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';

const routes: Routes = [
  {
    path: 'student',
    component: StudentPageComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_AL']
    }
  },
  {
    path: 'teacher',
    component: TeacherPageComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_PR']
    },
    children: [
      {
        path: 'register-class',
        component: RegisterClassComponent
      },
      {
        path: 'register-activity',
        component: RegisterActivityComponent
      }
    ]
  },
  {
    path: 'director',
    component: DirectorPageComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_DI']
    },
    children: [
      {
        path: 'register-period',
        component: RegisterPeriodComponent
      },
      {
        path: 'periods',
        component: PeriodsComponent
      },
      {
        path: 'register-classroom',
        component: RegisterClassroomComponent
      },
      {
        path: 'classrooms',
        component: ClassroomsComponent
      },
      {
        path: 'register-discipline',
        component: RegisterDisciplineComponent
      },
      {
        path: 'disciplines',
        component: DisciplinesComponent
      },
      {
        path: 'register-student',
        component: RegisterStudentComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'register-teacher',
        component: RegisterTeacherComponent
      },
      {
        path: 'teachers',
        component: TeachersComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
