import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from './servivces/artist.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  artist: any;
  artistName: string = '';

  constructor(
    private artistService: ArtistService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.artistName = this.activatedRoute.snapshot.queryParams['name'];

    this.artistService.getArtist(id).subscribe({
      next: (res: any) => {
        this.artist = res;
      },
      error: (err: any) => {},
    });
  }

  goBack(): void {
    this.location.back();
  }
}
