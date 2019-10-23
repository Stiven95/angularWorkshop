import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any;

  constructor(private alertaService: AlertaService) { }

  ngOnInit() {
    this.subscription = this.alertaService.getAlert()
    .subscribe(message => {
      switch (message && message.type) {
        case 'success':
            message.cssClass = 'alert alert-success';
            break;
        case 'error':
            message.cssClass = 'alert alert-danger';
            break;
    }
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
