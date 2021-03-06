import {
    Component,
    Host,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation
  } from '@angular/core';

  import { CommonModule } from '@angular/common';
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { FormsModule } from '@angular/forms';
  import { Http } from '@angular/http';
  import { RouterTestingModule } from '@angular/router/testing';

  import {
    Config,
    TokenProvider
  } from 'ngx-forge';

  import { Fabric8UIHttpService } from '../../shared/fabric8-ui-http.service';
  import { AppLauncherComponent } from './app-launcher.component';

  describe('LauncherComponent', () => {
    let component: AppLauncherComponent;
    let fixture: ComponentFixture<AppLauncherComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          FormsModule,
          RouterTestingModule
        ],
        declarations: [
          AppLauncherComponent
        ],
        providers: [
          TokenProvider,
          {
            provide: Http,
            useClass: Fabric8UIHttpService
          }
        ]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AppLauncherComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });


    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
