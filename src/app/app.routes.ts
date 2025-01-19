import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllHadithComponent } from './all-hadith/all-hadith.component';
import { NarratorsComponent } from './narrators/narrators.component';

export const routes: Routes = [
    {path:'app-home',component:HomeComponent},
    {path:'all-hadith',component:AllHadithComponent},
    {path:'app-narrators',component:NarratorsComponent},
    {path:'',redirectTo:'app-home',pathMatch:'full'}

];
