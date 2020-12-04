import { faSignature, faEnvelope, faLock, faFingerprint, faAddressCard, faGlobe, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { ClassService } from './../../services/class.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.css']
})
export class ViewClassComponent implements OnInit {

  public class: any;

  public faEnvelope = faEnvelope;
  public faSignature = faSignature;
  public faLock = faLock;
  public faFingerPrint = faFingerprint;
  public faAddressCard = faAddressCard;
  public faGlobe = faGlobe;
  public faKeyboard = faKeyboard;

  constructor(
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    this.classService.findById(Number(localStorage.getItem('class_id'))).subscribe(r => {
      this.class = r;
    });
  }

}
