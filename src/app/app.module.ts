import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { JarmuModule } from './pages/jarmu/jarmu.module';
import { MegallohelyModule } from './pages/megallohely/megallohely.module';
import { MenuComponent } from './shared/menu/menu.component';
import { JaratModule } from './pages/jarat/jarat.module';
import { MenetrendComponent } from './pages/menetrend/menetrend.component';
import { MenetrendModule } from './pages/menetrend/menetrend.module';
import { JaratmegalloModule } from './pages/jaratmegallo/jaratmegallo.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importáljuk a BrowserAnimationsModule-t
import { MatToolbarModule } from '@angular/material/toolbar'; // Importáljuk a MatToolbarModule-t
import { MatButtonModule } from '@angular/material/button'; // Importáljuk a MatButtonModule-t
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from  '@angular/fire/compat';
import { AngularFirestoreModule } from  '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from  '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './pages/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HomeModule,
    JarmuModule,
    MegallohelyModule,
    JaratModule,
    MenetrendModule,
    JaratmegalloModule,
    LoginModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireModule.initializeApp({"projectId":"kotprog-11c86","appId":"1:783970732201:web:c103caa0f53d145d0a81b8","storageBucket":"kotprog-11c86.appspot.com","apiKey":"AIzaSyDDFmJNx580PZc9v4Vgc64VkdPvLwOZhCU","authDomain":"kotprog-11c86.firebaseapp.com","messagingSenderId":"783970732201","measurementId":"G-8492ZK1CJZ"}),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    //provideFirebaseApp(() => initializeApp({"projectId":"kotprog-11c86","appId":"1:783970732201:web:c103caa0f53d145d0a81b8","storageBucket":"kotprog-11c86.appspot.com","apiKey":"AIzaSyDDFmJNx580PZc9v4Vgc64VkdPvLwOZhCU","authDomain":"kotprog-11c86.firebaseapp.com","messagingSenderId":"783970732201","measurementId":"G-8492ZK1CJZ"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
    
  ],
  providers: [
    provideAnimationsAsync()

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
