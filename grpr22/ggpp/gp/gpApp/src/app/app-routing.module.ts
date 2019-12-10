import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'visitorpage', loadChildren: './visitorpage/visitorpage.module#VisitorpagePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'editprofile', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'myactivities', loadChildren: './myactivities/myactivities.module#MyactivitiesPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'editnotif', loadChildren: './editnotif/editnotif.module#EditnotifPageModule' },
  { path: 'currentactivity', loadChildren: './currentactivity/currentactivity.module#CurrentactivityPageModule' },
  { path: 'cancelactivity', loadChildren: './cancelactivity/cancelactivity.module#CancelactivityPageModule' },
  { path: 'prevactivity', loadChildren: './prevactivity/prevactivity.module#PrevactivityPageModule' },
  { path: 'showactivities', loadChildren: './showactivities/showactivities.module#ShowactivitiesPageModule' },
  { path: 'createactivity', loadChildren: './createactivity/createactivity.module#CreateactivityPageModule' },
  { path: 'myfavorite', loadChildren: './myfavorite/myfavorite.module#MyfavoritePageModule' },
  { path: 'choosenotif', loadChildren: './choosenotif/choosenotif.module#ChoosenotifPageModule' },
  { path: 'homepage', loadChildren: './homepage/homepage.module#HomepagePageModule' },
  { path: 'restaurantslist', loadChildren: './restaurantslist/restaurantslist.module#RestaurantslistPageModule' },
  { path: 'indianrestaurant', loadChildren: './indianrestaurant/indianrestaurant.module#IndianrestaurantPageModule' },
  { path: 'newevents', loadChildren: './newevents/newevents.module#NeweventsPageModule' },
  { path: 'cafelist', loadChildren: './cafelist/cafelist.module#CafelistPageModule' },
  { path: 'alsayfalhendirest', loadChildren: './alsayfalhendirest/alsayfalhendirest.module#AlsayfalhendirestPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'hotelslist', loadChildren: './hotelslist/hotelslist.module#HotelslistPageModule' },
  { path: 'chalets', loadChildren: './chalets/chalets.module#ChaletsPageModule' },
  { path: 'malls', loadChildren: './malls/malls.module#MallsPageModule' },
  { path: 'gymtype', loadChildren: './gymtype/gymtype.module#GymtypePageModule' },
  { path: 'eventdetail', loadChildren: './eventdetail/eventdetail.module#EventdetailPageModule' },
  { path: 'mallshow/:id', loadChildren: './mallshow/mallshow.module#MallshowPageModule' },
  { path: 'resshow', loadChildren: './resshow/resshow.module#ResshowPageModule' },
  { path: 'restaurants', loadChildren: './restaurants/restaurants.module#RestaurantsPageModule' },
  { path: 'eventshow/:id', loadChildren: './eventshow/eventshow.module#EventshowPageModule' },
  { path: 'cafeshow/:id', loadChildren: './cafeshow/cafeshow.module#CafeshowPageModule' },
  { path: 'comments', loadChildren: './comments/comments.module#CommentsPageModule' },
  { path: 'rest', loadChildren: './rest/rest.module#RestPageModule' },
  { path: 'result', loadChildren: './result/result.module#ResultPageModule' },
  { path: 'show', loadChildren: './show/show.module#ShowPageModule' },
  { path: 'vrlist', loadChildren: './vrlist/vrlist.module#VrlistPageModule' },
  { path: 'vrshow', loadChildren: './vrshow/vrshow.module#VrshowPageModule' },
  { path: 'vclist', loadChildren: './vclist/vclist.module#VclistPageModule' },
  { path: 'vcshow/:id', loadChildren: './vcshow/vcshow.module#VcshowPageModule' },
  { path: 'velist', loadChildren: './velist/velist.module#VelistPageModule' },
  { path: 'veshow/:id', loadChildren: './veshow/veshow.module#VeshowPageModule' },
  { path: 'vmlist', loadChildren: './vmlist/vmlist.module#VmlistPageModule' },
  { path: 'vmshow/:id', loadChildren: './vmshow/vmshow.module#VmshowPageModule' },
  { path: 'favdetails/:id', loadChildren: './favdetails/favdetails.module#FavdetailsPageModule' },
  { path: 'second/:price', loadChildren: './second/second.module#SecondPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
