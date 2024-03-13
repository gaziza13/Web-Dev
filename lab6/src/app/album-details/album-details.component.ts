import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumsService } from '../album.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit{
  album!: Album
  title: string = "";


  constructor(private route: ActivatedRoute,
    private albumService: AlbumsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const postId = Number(params.get('id'));
        this.albumService.getAlbum(postId).subscribe((album) => {
          this.album = album;
        });
      }
    });
  }
  changeTitle() {
    if (this.title !== "") {
      this.albumService.updateAlbum(this.album.id, `{"title":"${this.title}"}`).subscribe(() => {
        console.log("updated");
        this.album.title = this.title;
        this.title = "";
      })
    }
  }
}
