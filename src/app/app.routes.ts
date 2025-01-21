import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllHadithComponent } from './all-hadith/all-hadith.component';
import { NarratorsComponent } from './narrators/narrators.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SiratComponent } from './sirat/sirat.component';

export const routes: Routes = [
    {path:'app-home',component:HomeComponent},
    {path:'app-sirat',component:SiratComponent},
    {path:'app-about-us',component:AboutUsComponent},
    {path:'all-hadith',component:AllHadithComponent},
    {path:'app-narrators',component:NarratorsComponent},
    {path:'',redirectTo:'app-home',pathMatch:'full'}

];
