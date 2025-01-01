class Character {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  // ダメージを受けるメソッド
  takeDamage(damage) {
    this.hp -= damage;
    console.log(`${this.name} took ${damage} damage! Remaining HP: ${this.hp}`);
    return this.hp <= 0; // HPが0以下なら削除が必要
  }
}

// キャラクタ一覧を管理する配列
const characters = [
  new Character('Hero', 100),
  new Character('Monster', 50),
  new Character('aplo', 150)
];

// キャラクタを削除するロジック
function handleTurn() {
  for (let i = characters.length - 1; i >= 0; i--) { // 逆順ループで安全に削除
    const character = characters[i];
    if (character.takeDamage(60)) {
      console.log(`${character.name} has been defeated!`);
      characters.splice(i, 1); // 配列から削除
    }
  }
}

// ターン処理
console.log('Before turn:', characters);
handleTurn();
console.log('After turn:', characters);
