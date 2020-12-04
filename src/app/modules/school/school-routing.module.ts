import { ViewClassComponent } from './components/view-class/view-class.component';
import { DisciplinesStudentComponent } from './components/disciplines-student/disciplines-student.component';
import { ClassesComponent } from './components/classes/classes.component';
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
    },
    children: [
      {
        path: 'classes',
        component: ClassesComponent,
        children: [
          {
            path: 'class',
            component: ViewClassComponent
          }
        ]
      },
      {
        path: 'disciplines',
        component: DisciplinesStudentComponent
      }
    ]
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
        path: 'periods',
        component: PeriodsComponent,
        children: [
          {
            path: 'register-period',
            component: RegisterPeriodComponent
          }
        ]
      },
      {
        path: 'classrooms',
        component: ClassroomsComponent,
        children: [
          {
            path: 'register-classroom',
            component: RegisterClassroomComponent
          }
        ]
      },
      {
        path: 'disciplines',
        component: DisciplinesComponent,
        children: [
          {
            path: 'register-discipline',
            component: RegisterDisciplineComponent
          }
        ]
      },
      {
        path: 'students',
        component: StudentsComponent,
        children: [
          {
            path: 'register-student',
            component: RegisterStudentComponent
          }
        ]
      },
      {
        path: 'teachers',
        component: TeachersComponent,
        children: [
          {
            path: 'register-teacher',
            component: RegisterTeacherComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
