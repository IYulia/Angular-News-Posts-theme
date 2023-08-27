import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PostsService } from 'src/app/services/posts.service';
import { PostsInterface, PostInterface } from 'src/interfaces/post.interface'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() theme: string = 'dark'; 
  posts: PostInterface[] = [];
  total: number = 0 
  pageSize: number = 8

  constructor(private postService: PostsService) { }
  
  ngOnInit() {
    this.getPosts(this.pageSize, 0)
  }

  handlePageEvent(e:PageEvent){
    console.log(e)
    this.getPosts(e.pageSize, e.pageSize * e.pageIndex)
  }

  getPosts(limit:number, skip: number):void{
    this.postService.getPosts(limit, skip).subscribe((data: PostsInterface) => {
      this.posts = data.posts;
      this.total =  data.total
    });
  }
}
