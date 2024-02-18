import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTestComponent } from './input-test.component';
import { By } from '@angular/platform-browser';

describe('InputTestComponent', () => {
  let component: InputTestComponent;
  let fixture: ComponentFixture<InputTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders default error state', () => {
    const mainContainer = fixture.debugElement.query(
      By.css('[data-testid="main-container"]')
    );

    expect(mainContainer.nativeElement.textContent).toContain(
      'Something went wrong'
    );
  });

  it('renders custom error message', () => {
    component.message = 'Email is already taken';
    fixture.detectChanges();

    const mainContainer = fixture.debugElement.query(
      By.css('[data-testid="main-container"]')
    );
    expect(mainContainer.nativeElement.textContent).toContain(
      'Email is already taken'
    );
  });
});
