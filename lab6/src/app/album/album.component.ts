import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumsService } from '../album.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent implements OnInit{
  albums!: Album[];

  constructor(private albumService: AlbumsService) {
  }
  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }

  deletePost(id: number) {
    this.albums = this.albums.filter(a => a.id !== id)
    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log("deleted album sucessfully")
    })
  }
}
