class Character {
    constructor () {
        // Abilities
        this.strength = 10;
        this.dexterity = 10;
        this.constitution = 10;
        this.intelligence = 10;
        this.wisdom = 10;
        this.charisma = 10;

        // Bonus to saving throws
        this.strengthSavingThrowBonus = 0;
        this.dexteritySavingThrowBonus = 0;
        this.constitutionSavingThrowBonus = 0;
        this.intelligenceSavingThrowBonus = 0;
        this.wisdomSavingThrowBonus = 0;
        this.charismaSavingThrowBonus = 0;
    }
}

export default Character;