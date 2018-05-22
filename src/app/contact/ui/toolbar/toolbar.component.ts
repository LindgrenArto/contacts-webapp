import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToolbarOptions} from './toolbar-options';
import {ToolbarService} from './toolbar.service';


@Component({
  selector: 'cw-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  @Output() MenuClick: EventEmitter<any>;
  options: ToolbarOptions;

  constructor(private toolbar: ToolbarService) {
    this.MenuClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.toolbar.toolbarOptions.subscribe((options: ToolbarOptions) => {
    this.options = options;
  });
}

onMenuClick() {
   this.MenuClick.emit();
  }
}
