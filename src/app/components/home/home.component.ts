import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HomeService } from './services/home.service';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  offset: number = 0;

  loading: boolean = false;
  artists: Array<any> = [];
  searchText: string = decodeURIComponent(this.activatedRoute.snapshot.queryParams['keyword'] || '');

  subject = new Subject<string>();
  results$: Observable<string> = this.subject.asObservable();

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe((q) => {
    //   if (q['keyword'] && q['keyword'] != this.searchText) {
    //     this.searchText = decodeURIComponent(q['keyword']);
    //     this.search();
    //   } else if (!q['keyword']) {
    //     this.searchText = '';
    //     this.artists = [];
    //   }
    // });

    this.results$.pipe(debounceTime(800)).subscribe(() => {
      this.artists = [];
      this.offset = 0;
      this.search();
    });

    if(this.searchText != '') {
      this.search();
    } else {
      this.searchText = 'tag';
      this.search();
    }
  }

  search() {
    this.loading = true;
    this.homeService.searchForArtists(this.searchText, this.offset).subscribe({
      next: (res: any) => {
        if(this.artists.length > 0) {
          this.artists = [...this.artists, ...res.artists.items];

        } else {
          this.artists = res.artists.items;
        }

        this.router.navigate([], {
          queryParams: {
            keyword: encodeURIComponent(this.searchText),
          },
          relativeTo: this.activatedRoute,
        });
        this.loading = false;        
      },
      error: (err: any) => {
        this.artists = [];
        this.offset = 0;
        this.loading = false;
      },

    });
  }

  callSearch() {
    if(this.searchText != '') {
      this.subject.next(this.searchText);
    }
  }

  onScroll() {
    this.offset += 20;
    this.search();
  }

}
