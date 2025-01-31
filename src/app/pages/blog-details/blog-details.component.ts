import { Component } from '@angular/core'; 
import IBlogType from '../../shared/types/blog-d-t';
import { UtilsService } from '../../shared/services/utils.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  public blog!:IBlogType;
  constructor(public utilsService:UtilsService){
    this.utilsService.blogs.subscribe((blogs) => {
      this.blog = blogs[0]
    });
  }
}
