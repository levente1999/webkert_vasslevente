import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JaratComponent } from './pages/jarat/jarat.component';
import { MegallohelyComponent } from './pages/megallohely/megallohely.component';
import { MenetrendComponent } from './pages/menetrend/menetrend.component';
import { JaratmegalloComponent } from './pages/jaratmegallo/jaratmegallo.component';
import { JarmuComponent } from './pages/jarmu/jarmu.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'jarat', component: JaratComponent },
  { path: 'megallohely', component: MegallohelyComponent,canActivate: [authGuard] },
  { path: 'menetrend', component: MenetrendComponent },
  { path: 'jaratmegallo', component: JaratmegalloComponent },
  { path: 'jarmu', component: JarmuComponent,canActivate: [authGuard]},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
