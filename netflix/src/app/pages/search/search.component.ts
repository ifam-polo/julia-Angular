import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService  } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private service: MovieApiService){}

  serchResult: any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  })

  submitForm(){
    
    console.log(this.searchForm.value, 'searchform')
    this.service.searchMovie(this.searchForm.value).subscribe((res)=>{
      this.serchResult = res.results;
    })
  }
}
