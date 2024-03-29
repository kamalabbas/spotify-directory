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
  loading: boolean = false;

  constructor(
    private artistService: ArtistService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.loading = true;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.artistName = this.activatedRoute.snapshot.queryParams['name'];

    this.artistService.getArtist(id).subscribe({
      next: (res: any) => {
        this.artist = res;
        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
