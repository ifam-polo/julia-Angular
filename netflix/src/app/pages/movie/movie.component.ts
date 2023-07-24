import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {


  getMovieVideoResult:any
  getMovieCast:any
  movieDetailResult:any 

  constructor(private service: MovieApiService,
    private router: ActivatedRoute){}

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id')
    console.log(getParamId,'getparamid');

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }

  getMovie(id:any){
    this.service.movieDetails(id).subscribe((res)=>{
      console.log(res, 'movieDetails');
      this.movieDetailResult = res;
    })
  }

  getVideo(id:any)
  {
    this.service.getMovieVideo(id).subscribe((result)=>{
        console.log(result,'getMovieVideo#');
        result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getMovieVideoResult = element.key;
            }
        });

    });
  }

  getCast(id:any){
    this.service.getMovieCast(id).subscribe((res)=>{
      console.log(res, "movieCast")
      this.getMovieCast = res.cast;
    })
  }

  
}
