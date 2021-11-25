import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WaifuServiceService } from '../waifu-service.service';

@Component({
  selector: 'app-nsfw',
  templateUrl: './nsfw.component.html',
  styleUrls: ['./nsfw.component.scss']
})
export class NsfwComponent implements OnInit {

  categories = ['waifu', 'neko', 'trap', 'blowjob']
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
    await this.waifuService.getWaifu("nsfw", this.selectedCategory).then(data => {this.imgUrl = data});
    this.imgUrlChange.emit(this.imgUrl);
    console.log(this.imgUrl);
  }
}
