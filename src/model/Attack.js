import { calculateModifier } from "../components/services/ModifierService";
import AttackAbilityEnum from "./enum/AttackAbilityEnum";

class Attack {
    constructor() {
        this.name = "Настроить";
        this.proficiency = false;
        this.proficiencyBonus = 0;
        this.ability = AttackAbilityEnum.EMPTY;
        this.abilityBonus = 0;
        this.damage = "1к4";
        this.additionalBonus = 0;
    }
}

export default Attack;
