class Character {
    constructor() {
        this.level = 1;
        this.name = "Безымянный";

        // Характеристики
        this.strength = 10;
        this.dexterity = 10;
        this.constitution = 10;
        this.intelligence = 10;
        this.wisdom = 10;
        this.charisma = 10;

        // Бонус к спасброскам
        this.strengthSavingThrowBonus = 0;
        this.dexteritySavingThrowBonus = 0;
        this.constitutionSavingThrowBonus = 0;
        this.intelligenceSavingThrowBonus = 0;
        this.wisdomSavingThrowBonus = 0;
        this.charismaSavingThrowBonus = 0;

        // Бонус мастерства
        this.proficiencyBonus = 2 + Math.floor(1 / 4);

        // Владение спасбросками
        this.strengthSavingThrowProficiency = false;        // Сила
        this.dexteritySavingThrowProficiency = false;       // Ловкость
        this.constitutionSavingThrowProficiency = false;    // Телосложение
        this.intelligenceSavingThrowProficiency = false;    // Интеллект
        this.wisdomSavingThrowProficiency = false;          // Мудрость
        this.charismaSavingThrowProficiency = false;        // Харизма

        // Владение навыками
        this.athleticsProficiency = false;      // Атлетика (Сила)

        this.acrobaticsProficiency = false;     // Акробатика (Ловкость)
        this.sleightOfHandProficiency = false;  // Ловкость рук (Ловкость)
        this.stealthProficiency = false;        // Скрытность (Ловкость)
        
        this.arcanaProficiency = false;         // Магия (Интеллект)
        this.historyProficiency = false;        // История (Интеллект)
        this.investigationProficiency = false;  // Анализ (Интеллект)
        this.natureProficiency = false;         // Природа (Интеллект)
        this.religionProficiency = false;       // Религия (Интеллект)
        
        this.animalHandlingProficiency = false; // Уход за животными (Мудрость)
        this.insightProficiency = false;        // Проницательность (Мудрость)
        this.medicineProficiency = false;       // Медицина (Мудрость)
        this.perceptionProficiency = false;     // Внимательность (Мудрость)
        this.survivalProficiency = false;       // Выживание (Мудрость)
        
        this.deceptionProficiency = false;      // Обман (Харизма)
        this.intimidationProficiency = false;   // Запугивание (Харизма)
        this.performanceProficiency = false;    // Выступление (Харизма)
        this.persuasionProficiency = false;     // Убеждение (Харизма)
    }
}

export default Character;
