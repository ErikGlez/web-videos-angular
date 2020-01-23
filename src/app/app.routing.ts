import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { VideoNewComponent } from './components/video-new/video-new.component';
import { IdentityGuard } from './services/identity.guard';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'inicio/:page', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'ajustes', component: UserEditComponent, canActivate: [IdentityGuard]},
    {path: 'guardar-video', component: VideoNewComponent,canActivate: [IdentityGuard]},
    {path: 'error', component: ErrorComponent},
    {path: '**', component:  ErrorComponent}
];

export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders =RouterModule.forRoot(appRoutes);