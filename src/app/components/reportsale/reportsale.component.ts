import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Report } from '../../interface/report';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-reportsale',
  templateUrl: './reportsale.component.html',
  styleUrls: ['./reportsale.component.css']
})
export class ReportsaleComponent implements OnInit {

  API = 'http://127.0.0.1:8000/api';
  reports:Report[];

  constructor(private reportService:ReportService, private httpClient:HttpClient){
    httpClient.get(this.API+'/reportsale').subscribe((data:Report[])=>{
			this.reports=data;	
		})
		
  }

  ngOnInit(): void {
  }

}
