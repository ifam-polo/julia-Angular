import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
 
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe({
      next: (res: any) => console.log(res.id, res.username),
      error: (err) => console.log(err)
    })

    this.activatedRoute.queryParams.subscribe({
      next: (res: any) => console.log(res.id, res.username),
      error: (err) => console.log(err)
    })

    setInterval( ()=> { 
      //this.router.navigate(['404']); //funciona tipo link. Usa normamente em paginas internas
      this.router.navigateByUrl('404');// faz o reload da pagina
    }, 5000)

    
  }

}
