import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHeaderBarComponent } from './client-header-bar.component';

describe('ClientHeaderBarComponent', () => {
  let component: ClientHeaderBarComponent;
  let fixture: ComponentFixture<ClientHeaderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientHeaderBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
