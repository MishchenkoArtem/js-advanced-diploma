import Character from '../Character';

class Magician extends Character {
  constructor(level, type) {
    super(level, type);
    this.attack = 10;
    this.defence = 40;
    this.level = level;
    this.type = 'magician';
  }
}
