import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //1. Потрібна змінна типу(створюється програмно,це один із видів реактивних форм):

  form: FormGroup;

  usernameError: string;

  constructor(private authService:AuthService,private router:Router) {

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


    // 9. Але є невелика проблема у нас по замовчуванню горить кнопка register хоча нічого не ввели,
    // тому можна полям дати статус required щоб нам било помилку коли ми ще нічого не ввели.
    // 10. Попрацюємо далі з API котре пропишемо в environments.

    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      confirmPassword: new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(20)])
    },[this._checkPasswords])

  }

  register(): void {

    //На сервері нам confirmPassword не потрібен тому ми маємо від нього позбутися:

    const rawValue = this.form.getRawValue();

    delete rawValue.confirmPassword;

    this.authService.register(rawValue).subscribe(
      value => this.router.navigate(['login']),
      error => this.usernameError = error.error.username[0]
    );

  };


  //   <!--
  //     7.Але нам потрібно ще й шоб password та confirmPassword були валідними тобто співпадали між собою.
  //   Для цього ми можемо створити свій кастомний валідатор. Створюємо метод _checkPasswords()
  //   і в себе буде він приймати всю нашу форму і ця форма буде абстрактним контролером (тобто її можна буде використовуввати
  //   для будь-якої форми). І повертати цей метод буде або validationError або null. Якщо все добре то повертає null.
  // Якщо ні то поветрає обєкт помилки.
  // Нам потрібно витягнкти два поля password та confirmPassword.
  // Створюємо константу password котру будемо брати з форми і з неї ми будемо брати наш контролер, також ''password''
  // -->


  _checkPasswords(form: AbstractControl): ValidationErrors | null {

    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');


//  8.Далі нам треба зрівняти ці два паролі чи вони рівні. І повертути оюєкт або null.

// Звертаюся до мого контролера password його оюєкта value і порівнюю його з value confirmPassword,
//     якщо вони рівні то ми відсилаємо null,
//     якщо не рівні відсилаємо обєкт з ключем notSame із значенням true

    //І тепер це все треба підключити під всю мою форму. Тому другим параметром після контролерів форми ми передаємо
    // наш валідатор.

    return password?.value === confirmPassword?.value ? null : {notSame: true}
  }






}
