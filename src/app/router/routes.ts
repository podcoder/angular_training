import { UserPostComponent } from './../components/user-post/user-post.component';


import { Route } from '@angular/router'

// Import our Components
import { UserListComponent } from '../components/user-list/user-list.component'
import { PostsComponent } from '../components/posts/posts.component'
import { AboutComponent } from '../components/about/about.component'
import { ContactComponent } from '../components/contact/contact.component'



export const routes: Route[] = [
    {
        path: 'user-list', component: UserListComponent
    },
    {
        path: 'posts', component: PostsComponent
    },
    {
        path: 'user-posts/:id', component: UserPostComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'contact', component: ContactComponent
    },

    { path: '', redirectTo: '/user-list', pathMatch: 'full' }
]