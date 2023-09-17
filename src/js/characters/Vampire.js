import Character from '../Character';

class Vampire extends Character {
  constructor(level, type) {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
    this.level = level;
    this.type = 'undead';
  }
}
