import { Component } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private movieApi : MovieApiService){}

  bannerResult: any =[]
  trendingMovieResult:any = []

  ngOnInit(): void {
    this.bannerData();
    this.trendingData()
  }


  bannerData(){
    this.movieApi.bannerApiData().subscribe((res) => {
      console.log(res,'Banner Result');
      this.bannerResult = res.results;
    });
  }

  trendingData(){
    this.movieApi.trendingMoviesApiData().subscribe((res)=>{
      console.log(res, 'trending movies')

      this.trendingMovieResult = res.results
    })
  }

}
