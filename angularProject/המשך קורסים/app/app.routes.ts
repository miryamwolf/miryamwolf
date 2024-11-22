import { Routes } from '@angular/router';
import { SchoolComponent } from '../comps/school/school.component';
import { StudentComponent } from '../comps/student/student.component';
import { DetailsComponent } from '../comps/details/details.component';
import { SetComponent } from '../comps/set/set.component';
import { HomeComponent } from '../comps/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'schools', component: SchoolComponent },
    { path: 'students', component: StudentComponent,
        children: [
            { path: 'details/:sid',component: DetailsComponent,title: 'פרטים נוספים'},
        ]
    },
    { path: 'set/:ssid', component: SetComponent,title:"עריכת תלמידה"},
    { path: '', component: HomeComponent }
       
];