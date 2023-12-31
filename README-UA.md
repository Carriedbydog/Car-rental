# RENTIFY - Car-rental service

(https://carriedbydog.github.io/Car-rental/)

Цей проект був створений за допомогою Create React App.

Під час розробки проекту були використані такі бібліотеки:

1. Для стилізації: Toastify, Tailwind, daisyUI, Swiper, Lucide-react,
   React-icons,React-loader-spinner.
2. Для операцій з базою даних: Axios, Redux Toolkit.
3. Бек-енд був створений за допомогою сервісу mockApi (https://mockapi.io).

Додаток складається з трьох сторінок:

**Home**: На головній сторінці розміщений слайдер для відображення деяких
доступних автомобілів. Тут є назва сайту і короткий опис.

**Catalog**: На сторінці Каталог користувачі можуть вибрати із 12 автомобілів.
Натискання кнопки "Завантажити ще" завантажує ще 12 автомобілів. Сторінка також
надає можливість фільтрувати за трьома категоріями (Марка автомобіля, Ціна за 1
годину, Пробіг автомобіля км). Користувачі можуть вибрати бажану марку
автомобіля, ціну і пробіг автомобіля за допомогою цих фільтрів. Кожна картка
автомобіля відображає короткий опис та фотографію. Якщо користувачі хочуть
дізнатися більше про певний автомобіль, натискання кнопки "Докладніше" відкриває
модальне вікно з більш докладною інформацією про автомобіль. Найголовніше, в
модальному вікні є кнопка "Оренда автомобіля", що дозволяє користувачам
зв'язатися з компанією та забронювати автомобіль. Кожна картка автомобіля також
містить кнопку у формі серця, що дозволяє користувачам додавати автомобіль до
обраних.

**Favorites**: На сторінці Обране автоматично відображаються автомобілі, які
користувачі вибрали у вибране. Користувачі можуть керувати цим списком (видаляти
автомобілі з обраних). Натисканням "Завантажити ще" користувачі можуть
переглядати більш докладну інформацію і робити бронювання автомобіля.

Кожна сторінка має бічне меню для швидкої навігації по сайту.
