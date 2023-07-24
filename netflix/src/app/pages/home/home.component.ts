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
  actionMovieResult: any = []
  adventureMovieResult: any = []
  animationMovieResult: any = []
  comedyMovieResult: any = []
  documentaryMovieResult: any = []
  scienceFictionMovieResult: any = []
  thriller:any = []

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.scienceFictionMovie();
    this.documentaryMovie();
    this.thrillerMovie();
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

  actionMovie(){
    this.movieApi.fetchActionMovies().subscribe((res)=>{
      console.log(res, "filme de ação")

      this.actionMovieResult = res.results;

    })
  }

  adventureMovie(){
    this.movieApi.fetchAdventureMovies().subscribe((res)=>{
      console.log(res, "filme de aventura")
      this.adventureMovieResult = res.results;
    })
  }
  animationMovie(){
    this.movieApi.fetchAnimationMovies().subscribe((res)=>{
      console.log(res, "filme de animação")
      this.animationMovieResult = res.results;
    })
  }

  comedyMovie(){
    this.movieApi.fetchComedyMovies().subscribe((res)=>{
      console.log(res, "filme de comédia")
      this.comedyMovieResult = res.results;
    })
  }

  documentaryMovie(){
    this.movieApi.fetchDocumentaryMovies().subscribe((res)=>{
      console.log(res, "filme de documentario")
      this.documentaryMovieResult = res.results;
    })
  }
  scienceFictionMovie(){
    this.movieApi.fetchScienceFictionMovies().subscribe((res)=>{
      console.log(res, "filme de ficção científica")
      this.scienceFictionMovieResult = res.results;
    })
  }
  thrillerMovie(){
    this.movieApi.fetchThrillerMovies().subscribe((res)=>{
      console.log(res, "filme de terror") 
      this.thriller = res.results;
    })
  }
}
