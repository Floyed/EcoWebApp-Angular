import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FundraiserListComponent} from './Fundraisers/fundraiser-list/fundraiser-list.component';
import {FundraiserDetailComponent} from './Fundraisers/fundraiser-detail/fundraiser-detail.component';
import {FundraiserCreateComponent} from './Fundraisers/fundraiser-create/fundraiser-create.component';
import {MyFundraiserListComponent} from './Fundraisers/my-fundraiser-list/my-fundraiser-list.component';
import {MyFundraiserDetailComponent} from './Fundraisers/my-fundraiser-detail/my-fundraiser-detail.component';
import {DonationCreateComponent} from './Donations/donation-create/donation-create.component';
import {MyDonationsListComponent} from './Donations/my-donations-list/my-donations-list.component';
import { AuthGuard } from './auth/auth.guard';
import {CallbackComponent} from './callback.component';
import { NotFoundComponent} from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {EditFundraiserComponent} from './Fundraisers/edit-fundraiser/edit-fundraiser.component';

const routes: Routes = [
  { path: 'fundraiser-list', component: FundraiserListComponent },
  { path: 'fundraiser-detail/:id', component: FundraiserDetailComponent },
  { path: 'fundraiser-create', component: FundraiserCreateComponent, canActivate: [ AuthGuard ]},
  { path: 'my-fundraisers-list', component: MyFundraiserListComponent, canActivate: [AuthGuard]},
  { path: 'my-fundraiser-detail/:id', component: MyFundraiserDetailComponent, canActivate: [ AuthGuard ] },
  { path: 'edit-fundraiser/:id', component: EditFundraiserComponent, canActivate: [AuthGuard]},
  { path: 'donate/:id', component: DonationCreateComponent, canActivate: [ AuthGuard ] },
  { path: 'my-donations-list', component: MyDonationsListComponent, canActivate: [ AuthGuard ] },
  { path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard ]},
  { path: 'callback', component: CallbackComponent },
  { path: 'petition', loadChildren: './petition/petition.module#PetitionModule' },
  { path: '404', component: NotFoundComponent },
  { path: '500', component: ServerErrorComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})

export class AppRoutingModule { }

