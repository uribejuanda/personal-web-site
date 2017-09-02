import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-photo-flip',
    templateUrl: './photo-flip.component.html',
    styleUrls: ['./photo-flip.component.css']
})
export class PhotoFlipComponent implements OnInit {
    cols: any[];
    rows: any[];
    @Input() size: number;
    @Input() columns: number;

    constructor() {

    }

    ngOnInit() {
        this.cols = Array(this.columns).fill(0);
        this.rows = Array(Math.floor(window.innerHeight / this.size)).fill(0);
        console.log(Math.floor(window.innerHeight / this.size));
    }

    onResize(event) {
        // event.target.innerWidth;
        // console.log(event.target.innerHeight);
    }

}
