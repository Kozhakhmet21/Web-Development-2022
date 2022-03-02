import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'project_1';
  num: number;
  message: string;
  // array: number[] = [4, 8, 2, 6, 1]; Осылай да жазып кетуге болады.
  array: number[];
  students: any[];
  isOk: boolean;
  intputData: string;
  items: string[];

  constructor(){
    console.log("constructor is running")

    this.num = 3;
    this.message = "This's a message"
    this.array = [4, 8, 2, 6, 1]; // Осылайда жазуға болады.
    this.students = [
      {
        id: '20BD123123',
        name: "Student 1",
        gpa: 3.4
      },
      {
        id: '20BD987522',
        name: "Student 2",
        gpa: 3.6
      },
      {
        id: '20BD672384',
        name: "Student 3",
        gpa: 3.8
      }
    ];
    this.isOk = true;
    this.intputData = '';
    this.items = [];
  }


  // btnClick(){
  //   console.log("Something")
  // }

  btnClick(){
    // if (this.isOk)
    //   this.isOk = false;
    // else
    //   this.isOk = true;

    this.isOk = !this.isOk; // Осылай өте қысқаша жазуға болады.
    // Егер true болса true --> !true=>false --> true --> false болады.
    // Cолай false --> true болып кері мәніне өзгеріп отырады, '!' арқасында.
  }


  addItem(){
    // console.log(this.intputData);

    this.items.push(this.intputData);
    this.intputData = ''; // Данныйды еңгізіп алғаннан кейін, input-ты тазалап, бос қыламыз.
  }


  deleteItem(index: number){
    this.items.splice(index, 1);
  }

}
