import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //1. Потрібна змінна типу(створюється програмно,це один із видів реактивних форм):

  form: FormGroup;

  constructor() {

    this._createForm();

  }

  ngOnInit(): void {
  }




// 2. треба проініціалізувати форму якимись філдами тобто за що будуть відповідати конкретні поля.
//   Створимо якийсь медод _createForm (в себе приймати нічого не буде і віддавати нічного не буде):


  _createForm(): void {

    // 3. Звертаємось до нашої змінної form і вона буде дорівнювати new FormGroup({}).
    // Він в себе буде приймати обєкт і грубо говорячи це і буде вся наша форма в ts коді.
    // А в середину ми будемо класти контролери які будуть відповідати за інпути.
    //Ми будемо працювати з API карів і в нас будуть філди username та password.
    //І вони будуть дорівнювати FormControl() в котрі в середині кладемо дефолтні параметри,
    //котрі будуть світитися в інпуті. Поки це буде нічого(null).
    //І буде у нас confirmPassword.
    // І в конструкторі ініціалізуємо це все (тобто запускаємо наш метод)



    //6.Можемо також валідувати нашу форму, за це також відповідає FormControl,други параметром може ідти [Validators]
    //Ми можемо це використовувати і сказати що наша кнопка буде disabled якщо форма буде не валідною.


    this.form = new FormGroup({
      username: new FormControl(null,[Validators.minLength(3),Validators.maxLength(20)]),
      password: new FormControl(null,[Validators.minLength(3),Validators.maxLength(20)]),
      confirmPassword: new FormControl(null,[Validators.minLength(3),Validators.maxLength(20)])
    })

  }

  register(): void {

    console.log(this.form)

  };



  //   <!--
  //     7.Але нам потрібно ще й шоб password та confirmPassword були валідними тобто співпадали між собою.
  //   Для цього ми можемо створити свій кастомний валідатор.
  // -->





}
