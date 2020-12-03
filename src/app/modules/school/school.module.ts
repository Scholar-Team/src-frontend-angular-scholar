import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';

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
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
  HomeComponent],
  imports: [
    CommonModule,
    SchoolRoutingModule
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
