/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict'

const advertisingSection = document.querySelector('.promo__adv')

const advertisingImg = advertisingSection.querySelectorAll('img')

const advertisingTitle = advertisingSection.querySelector('.promo__adv-title')

const genreFilm = document.querySelector('.promo__genre')

const promoBg = document.querySelector('.promo__bg')

const moviesList = document.querySelector('.promo__interactive-list')

advertisingImg.forEach((img) => img.remove()) // первое задание
advertisingTitle.remove() // первое задание
genreFilm.textContent = 'Драма' // второе задание
promoBg.style.backgroundImage = "url('img/bg.jpg')" // третье задание

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
  ],
}

movieDB.movies.sort() // отсортировали список фильмов по алфавиту. четвертое задание

moviesList.innerHTML = '' // очищаем разметку прошлую

movieDB.movies.forEach((film, i) => {
  moviesList.innerHTML += `
  <li class="promo__interactive-item">
    ${i + 1}. ${film}
    <div class="delete"></div>
  </li>`
}) // тут мы заполняем пустой список фильмов на странице новыми отсортированными данными с нумерацией. Пятое задание
