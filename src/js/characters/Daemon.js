import Character from '../Character';

class Daemon extends Character {
  constructor(level, type) {
    super(level, type);
    this.attack = 10;
    this.defence = 10;
    this.level = level;
    this.type = 'daemon';
  }
}
