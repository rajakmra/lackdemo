import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let app:any;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const el = fixture.nativeElement.querySelector('input');
    el.value ='hello';
    //expect(app.myfun('hello')).toBe('hll');
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();

  });

/*   it('should remove vowel', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.myfun('hello')).toBe('hll');
  }); */
  it('should remove vowel', () => {
    expect(app.mynewstr).toBe('hll');
  });  
});
