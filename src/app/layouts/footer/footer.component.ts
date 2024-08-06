import { Component } from '@angular/core';
import { PropsDatatService } from '../../services/propsData.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  data: string = ''
  constructor(private props: PropsDatatService){

  }
  ngOnInit() {
    this.props.data.subscribe((item) => {
      this.data = item
    })
  }
  sendDataToParent() {
    this.props.updateData('Data from child');
  }
}
