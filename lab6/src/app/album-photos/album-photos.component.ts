import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumExtended } from '../album.model';
import { AlbumsService } from '../album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos!: AlbumExtended[];
  constructor(private route: ActivatedRoute,
    private albumService: AlbumsService) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const id = Number(params.get('id'));
        this.albumService.getPhotos(id).subscribe((photos) => {
          this.photos = photos;
        });
      }
    });
  }
}
