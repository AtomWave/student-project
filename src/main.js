import '/public/styles/style.scss'
import { setupCounter } from './js/counter.js'
import { initTabs } from './js/tabs.js'
import { hotels } from "./js/hotels.js";
import { generateHotels } from './js/generate-hotels.js';
import { initSwipers } from './js/swiper.js';

const counter = document.querySelector('.counter');
if (counter) {
  setupCounter(counter);
}

// generateHotels(hotels);


document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSwipers();
});


// Функция для создания SVG с указанным путем и размерами
function createSVG(path, width, height) {
  return `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <use href="${path}"></use>
        </svg>
  `;
}

// Универсальная функция для вставки SVG в указанный элемент с заданными параметрами
function insertInlineSVG(selector, path, width, height) {
  const element = document.querySelector(selector); // Находим элемент по селектору
  if (element) {
    element.insertAdjacentHTML('beforeend', createSVG(path, width, height)); // Вставляем иконку с заданными параметрами
  } else {
    console.error(`Element with selector '${selector}' not found.`);
  }
}

// Вызов функций для вставки SVG
insertInlineSVG('.title', `/assets/vectors/sprite.svg#shield`, 20, 20); // Вставляем иконку shield в title
insertInlineSVG('.subtitle', `/assets/vectors/sprite.svg#shield2`, 30, 30); // Вставляем иконку shield2 размером 30x30 в subtitle
