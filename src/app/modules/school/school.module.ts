import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';
import { PersonModule } from './../person/person.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { AngularTiltModule } from 'angular-tilt';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { TeacherService } from './services/teacher.service';
import { StudentService } from './services/student.service';
import { SchoolService } from './services/school.service';
import { PeriodService } from './services/period.service';
import { FeedbackService } from './services/feedback.service';
import { DisciplineService } from './services/discipline.service';
import { DirectorService } from './services/director.service';
import { ClassroomService } from './services/classroom.service';
import { ClassService } from './services/class.service';
import { AnswerService } from './services/answer.service';
import { ActivityService } from './services/activity.service';

import { StudentPageComponent } from './pages/student-page/student-page.component';
import { TeacherPageComponent } from './pages/teacher-page/teacher-page.component';
import { DirectorPageComponent } from './pages/director-page/director-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { RegisterTeacherComponent } from './components/register-teacher/register-teacher.component';
import { RegisterPeriodComponent } from './components/register-period/register-period.component';
import { RegisterDisciplineComponent } from './components/register-discipline/register-discipline.component';
import { RegisterActivityComponent } from './components/register-activity/register-activity.component';
import { RegisterClassComponent } from './components/register-class/register-class.component';
import { RegisterClassroomComponent } from './components/register-classroom/register-classroom.component';
import { HeaderComponent } from './components/header/header.component';
import { PeriodsComponent } from './components/periods/periods.component';
import { ClassroomsComponent } from './components/classrooms/classrooms.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ClassesComponent } from './components/classes/classes.component';
import { DisciplinesComponent } from './components/disciplines/disciplines.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { DisciplinesStudentComponent } from './components/disciplines-student/disciplines-student.component';
import { ViewClassComponent } from './components/view-class/view-class.component';

@NgModule({
  declarations: [
    StudentPageComponent,
    TeacherPageComponent,
    DirectorPageComponent,
    ModalComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent,
    RegisterPeriodComponent,
    RegisterDisciplineComponent,
    RegisterActivityComponent,
    RegisterClassComponent,
    RegisterClassroomComponent,
    HeaderComponent,
    PeriodsComponent,
    ClassroomsComponent,
    ActivitiesComponent,
    ClassesComponent,
    DisciplinesComponent,
    StudentsComponent,
    TeachersComponent,
    DisciplinesStudentComponent,
    ViewClassComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SchoolRoutingModule,
    ButtonModule,
    AngularTiltModule,
    FileUploadModule,
    DialogModule,
    PersonModule,
    FontAwesomeModule,
    TableModule
  ],
  providers: [
    ActivityService,
    AnswerService,
    ClassService,
    ClassroomService,
    DirectorService,
    DisciplineService,
    FeedbackService,
    PeriodService,
    SchoolService,
    StudentService,
    StudentService,
    TeacherService
  ]
})
export class SchoolModule { }
