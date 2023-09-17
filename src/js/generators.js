import Team from './Team';
// Формирует экземпляр персонажа из массива allowedTypes со
// случайным уровнем от 1 до maxLevel

// @param allowedTypes массив классов
// @param maxLevel максимальный возможный уровень персонажа
// @returns генератор, который при каждом вызове
// возвращает новый экземпляр класса персонажа

// eslint-disable-next-line require-yield
export function* characterGenerator(allowedTypes, maxLevel) {
  const randomElement = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
  return randomElement(maxLevel);
}

// Формирует массив персонажей на основе characterGenerator
// @param allowedTypes массив классов
// @param maxLevel максимальный возможный уровень персонажа
// @param characterCount количество персонажей, которое нужно сформировать
// @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  
}
