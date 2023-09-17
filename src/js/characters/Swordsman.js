import Character from '../Character';

class Swordsman extends Character {
  constructor(level, type) {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
    this.level = level;
    this.type = 'swordsman';
  }
}
