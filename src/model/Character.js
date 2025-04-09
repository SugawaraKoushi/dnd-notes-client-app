import { calculateModifier } from "../components/services/ModifierService";

class Character {
    constructor() {
        this.level = 1;
        this.name = "Безымянный персонаж";
        this.race = "Дварф";
        this.class = "Воин, Рыцарь Эхо";
        this.speed = 25;
        this.armorClass = 10;

        // Здоровье
        this.maxHP = 100;
        this.currentHP = 100;
        this.temporaryHP = 0;

        // Характеристики
        this.strength = 10;
        this.dexterity = 10;
        this.constitution = 10;
        this.intelligence = 10;
        this.wisdom = 10;
        this.charisma = 10;

        // Инициатива
        this.initiative = calculateModifier(this.dexterity);

        // Истощение
        this.exhausted = 0;

        // Вдохновение
        this.inspiration = false;

        // Бонус мастерства
        this.proficiencyBonus = 2 + Math.floor(this.level / 4);

        // Спасброски
        this.strengthSavingThrow = 0;
        this.dexteritySavingThrow = 0;
        this.constitutionSavingThrow = 0;
        this.intelligenceSavingThrow = 0;
        this.wisdomSavingThrow = 0;
        this.charismaSavingThrow = 0;

        // Бонус к спасброскам
        this.strengthSavingThrowBonus = 0;
        this.dexteritySavingThrowBonus = 0;
        this.constitutionSavingThrowBonus = 0;
        this.intelligenceSavingThrowBonus = 0;
        this.wisdomSavingThrowBonus = 0;
        this.charismaSavingThrowBonus = 0;

        // Владение спасбросками
        this.strengthSavingThrowProficiency = false;
        this.dexteritySavingThrowProficiency = false;
        this.constitutionSavingThrowProficiency = false;
        this.intelligenceSavingThrowProficiency = false;
        this.wisdomSavingThrowProficiency = false;
        this.charismaSavingThrowProficiency = false;

        // Навыки
        this.athletics = 0; // Атлетика
        this.acrobatics = 0; // Акробатика
        this.sleightOfHand = 0; // Ловкость рук
        this.stealth = 0; // Скрытность
        this.arcana = 0; // Магия
        this.history = 0; // История
        this.investigation = 0; // Анализ
        this.nature = 0; // Природа
        this.religion = 0; // Религия
        this.animalHandling = 0; // Уход за животными
        this.insight = 0; // Проницательность
        this.medicine = 0; // Медицина
        this.perception = 0; // Восприятие
        this.survival = 0; // Выживание
        this.deception = 0; // Обман
        this.intimidation = 0; // Запугивание
        this.performance = 0; // Выступление
        this.persuasion = 0; // Убеждение

        // Владение навыками
        this.athleticsProficiency = false; // Атлетика
        this.acrobaticsProficiency = false; // Акробатика
        this.sleightOfHandProficiency = false; // Ловкость рук
        this.stealthProficiency = false; // Скрытность
        this.arcanaProficiency = false; // Магия
        this.historyProficiency = false; // История
        this.investigationProficiency = false; // Анализ
        this.natureProficiency = false; // Природа
        this.religionProficiency = false; // Религия
        this.animalHandlingProficiency = false; // Уход за животными
        this.insightProficiency = false; // Проницательность
        this.medicineProficiency = false; // Медицина
        this.perceptionProficiency = false; // Внимательность
        this.survivalProficiency = false; // Выживание
        this.deceptionProficiency = false; // Обман
        this.intimidationProficiency = false; // Запугивание
        this.performanceProficiency = false; // Выступление
        this.persuasionProficiency = false; // Убеждение

        // Бонусы к навыкам
        this.athleticsBonus = 0; // Атлетика
        this.acrobaticsBonus = 0; // Акробатика
        this.sleightOfHandBonus = 0; // Ловкость рук
        this.stealthBonus = 0; // Скрытность
        this.arcanaBonus = 0; // Магия
        this.historyBonus = 0; // История
        this.investigationBonus = 0; // Анализ
        this.natureBonus = 0; // Природа
        this.religionBonus = 0; // Религия
        this.animalHandlingBonus = 0; // Уход за животными
        this.insightBonus = 0; // Проницательность
        this.medicineBonus = 0; // Медицина
        this.perceptionBonus = 0; // Восприятие
        this.survivalBonus = 0; // Выживание
        this.deceptionBonus = 0; // Обман
        this.intimidationBonus = 0; // Запугивание
        this.performanceBonus = 0; // Выступление
        this.persuasionBonus = 0; // Убеждение

        // Пасивные чувства
        this.perceptionPassive = 10 + this.perception;
        this.insightPassive = 10 + this.insight;
        this.investigationPassive = 10 + this.investigation;
    }
}

export default Character;
