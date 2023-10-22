import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/common-services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private api: ApiService) { }

  getArtist(id: any) : Observable<any> {
    let query = `artists/${id}/albums?limit=20`
    return this.api.get(query);
  }
}
