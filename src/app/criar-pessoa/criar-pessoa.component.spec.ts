import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPessoaComponent } from './criar-pessoa.component';

describe('CriarPessoaComponent', () => {
  let component: CriarPessoaComponent;
  let fixture: ComponentFixture<CriarPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
