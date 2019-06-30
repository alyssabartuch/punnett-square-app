import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-punnett-square',
  templateUrl: './punnett-square.component.html',
  styleUrls: ['./punnett-square.component.css']
})
export class PunnettSquareComponent implements OnInit {
  genotype1a = '';
  genotype1b = '';
  genotype2a = '';
  genotype2b = '';

  cross1 = '';
  cross2 = '';
  cross3 = '';
  cross4 = '';

  constructor() { }

  ngOnInit() {
  }

  submitGenotypes(form) {
    console.log(form.value);
    this.genotype1a = form.get('genotype-1').value[0];
    this.genotype1b = form.get('genotype-1').value[1];

    this.genotype2a = form.get('genotype-2').value[0];
    this.genotype2b = form.get('genotype-2').value[1];
    console.log('genotype 1a: ' + this.genotype1a);
    console.log('genotype 1b: ' + this.genotype1b);
    console.log('genotype 2a: ' + this.genotype2a);
    console.log('genotype 2b: ' + this.genotype2b);

    form.reset();

    this.generateCross();
  }

  generateCross() {
    this.cross1 = this.genotype1a + this.genotype2a;
    this.cross2 = this.genotype1b + this.genotype2a;
    this.cross3 = this.genotype1a + this.genotype2b;
    this.cross4 = this.genotype1b + this.genotype2b;
  }
}
