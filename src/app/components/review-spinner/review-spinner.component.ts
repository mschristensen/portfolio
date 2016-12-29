import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'review-spinner',
  templateUrl: './review-spinner.component.html',
  styleUrls: ['./review-spinner.component.less']
})
export class ReviewSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedReviewIdx = 0;

  reviews = [
    {
      body: "From the first time I met with Mike he has demonstrated an in-depth understanding of the tools necessary to bring the vision we had into reality. We now have our beta online and everything is running as planned. We would be very keen to have him come back to work for us again.",
      author: "James Weir, Managing Director, WE Collective",
      imgUrl: "assets/images/reviews/weco.jpg"
    },{
      body: "Mike has developed excellent skills in Computer Science... in his final year of studies his performance was at rank 4 out of 44 students. He has been one of the strongest and most dedicated students I have supervised in a BSc project.",
      author: "Dr. Tilo Burghardt, Lecturer, University of Bristol",
      imgUrl: "assets/images/reviews/uob.png"
    },{
      body: "Mike is a very thorough engineer that dives into all small details. He is a real team player and learns very fast. He is a valuable member of a team who consistently achieves good results and delivers to all expectations.",
      author: "Nir Ezry, Operations Director, Ocean Blue Software",
      imgUrl: "assets/images/reviews/ocean-blue.png"
    }
  ];

}
