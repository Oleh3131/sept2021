import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Потрібна зміна типу(створюються програмно,це один із видів реактивних форм):

  form: FormGroup;

  constructor() {

    this._createForm();

  }

  ngOnInit(): void {
  }

// треба проініціалізувати форму якимись філдами тобто за що будуть відповідати конкретні поля.
//   Створимо якийсь медод _createForm (в себе приймати нічого не буде і віддавати нічного не буде):

  _createForm(): void {

    // Звертаємось до нашої змінної form і вона буде дорівнювати new FormGroup({}).
    // Він в себе буде приймати обєкт і грубо говорячи це і буде вся наша форма в ts коді.
    // А в середину ми будемо класти контролери які будуть відповідати за інпути.
    //Ми будемо працювати з API карів і в нас будуть філди username та password.
    //І вони будуть дорівнювати FormControl() в котрі в середині кладемо дефолтні параметри,
    //котрі будуть світитися в інпуті. Поки це буде нічого(null).
    //І буде у нас confirmPassword.
    // І в конструкторі ініціалізуємо це все (тобто запускаємо наш метод)


    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
      confirmPassword: new FormControl(null)
    })

  }

}
