import { calculateModifier } from "../components/services/ModifierService";
import AttackAbilityEnum from "./enum/AttackAbilityEnum";

class Attack {
    constructor(
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        proficiencyBonus
    ) {
        this.name = "Настроить";
        this.proficiency = true;
        this.proficiencyBonus = this.proficiency ? proficiencyBonus : 0;
        this.ability = AttackAbilityEnum.EMPTY;
        this.abilityBonus = 0;
        this.damage = "1к4";
        this.additionalBonus = 0;

        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
    }

    updateAbilityBonus() {
        let abilityModifier = 0;

        switch (this.ability) {
            case AttackAbilityEnum.STRENGTH:
                abilityModifier = calculateModifier(this.strength);
                break;
            case AttackAbilityEnum.DEXTERITY:
                abilityModifier = calculateModifier(this.dexterity);
                break;
            case AttackAbilityEnum.CONSTITUTION:
                abilityModifier = calculateModifier(this.constitution);
                break;
            case AttackAbilityEnum.INTELLIGENCE:
                abilityModifier = calculateModifier(this.intelligence);
                break;
            case AttackAbilityEnum.WISDOM:
                abilityModifier = calculateModifier(this.wisdom);
                break;
            case AttackAbilityEnum.CHARISMA:
                abilityModifier = calculateModifier(this.charisma);
                break;
            case AttackAbilityEnum.EMPTY:
            default:
                abilityModifier = 0;
        }

        const newAttack = new Attack(
            this.strength,
            this.dexterity,
            this.constitution,
            this.intelligence,
            this.wisdom,
            this.charisma,
            this.proficiencyBonus
        );

        Object.assign(newAttack, {
            name: this.name,
            proficiency: this.proficiency,
            damage: this.damage,
            additionalBonus: this.additionalBonus,
            ability: this.ability,
            abilityBonus: abilityModifier,
        });

        return newAttack;
    }

    setAbility(ability) {
        const newAttack = new Attack(
            this.strength,
            this.dexterity,
            this.constitution,
            this.intelligence,
            this.wisdom,
            this.charisma,
            this.proficiencyBonus
        );

        Object.assign(newAttack, {
            ...this,
            ability,
        });

        return newAttack.updateAbilityBonus();
    }
}

export default Attack;
