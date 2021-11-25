import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WaifuServiceService } from '../waifu-service.service';

@Component({
  selector: 'app-sfw',
  templateUrl: './sfw.component.html',
  styleUrls: ['./sfw.component.scss']
})
export class SfwComponent implements OnInit {

  categories = ['waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle']
  selectedCategory = this.categories[0]

  @Input()imgUrl?: string;
  @Output()imgUrlChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private waifuService: WaifuServiceService) { }

  ngOnInit(): void {
  }

  selectCategory(cat: string): void {
    this.selectedCategory = cat
  }

  async getWaifu() {
    await this.waifuService.getWaifu("sfw", this.selectedCategory).then(data => {this.imgUrl = data});
    this.imgUrlChange.emit(this.imgUrl);
    console.log(this.imgUrl);
  }
}
