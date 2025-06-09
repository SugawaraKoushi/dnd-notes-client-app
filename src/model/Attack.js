import { calculateModifier } from "../components/services/ModifierService";
import AttackAbilityEnum from "./enum/AttackAbilityEnum";

class Attack {
    constructor(
        // strength,
        // dexterity,
        // constitution,
        // intelligence,
        // wisdom,
        // charisma,
        // proficiency
    ) {
        this.name = "Настроить";
        this.proficiency = false;
        this.ability = AttackAbilityEnum.EMPTY;
        this.damage = "1к4";
    }
}

export default Attack;
