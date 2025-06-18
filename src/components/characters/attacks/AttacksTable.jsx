import { Button, Flex, Table } from "antd";
import { useContext, useMemo, useState } from "react";
import "./index.css";
import { Link } from "react-router";
import Attack from "../../../model/Attack";
import AttackModal from "./AttackModal";
import { modifierAsString } from "../../services/ModifierService";
import { AttackContext } from "../context/AttackContext";
import { NotificationContext } from "../context/NotificationContext";
import { rollDice } from "../../services/RollDiceService";

const AttacksTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { attacks, character, onAttacksChange } = useContext(AttackContext);
    const { onRollButtonClick } = useContext(NotificationContext);
    const [selectedAttackIndex, setSelectedAttackIndex] = useState(null);

    const datasource = useMemo(() => {
        return attacks.map((attack, index) => ({
            key: index,
            name: attack.name,
            bonus:
                attack.proficiencyBonus +
                attack.additionalBonus +
                attack.abilityBonus,
            damage: attack.damage,
        }));
    }, [attacks]);

    const handleAddAttack = () => {
        const attack = new Attack(
            character.strength,
            character.dexterity,
            character.constitution,
            character.intelligence,
            character.wisdom,
            character.charisma,
            character.proficiencyBonus
        );

        onAttacksChange([...attacks, attack]);
    };

    const handleDeleteLastAttack = () => {
        if (attacks.length === 0) return;
        onAttacksChange(attacks.slice(0, -1));
    };

    const handleDeleteAttack = () => {
        let newAttacks = [...attacks];
        newAttacks.splice(selectedAttackIndex, 1);
        
        onAttacksChange(newAttacks);
        setIsModalOpen(false);
    }

    const handleModalOpen = (index) => {
        setSelectedAttackIndex(index);
        setIsModalOpen(true);
    };

    const handleModalClose = (updatedAttack) => {
        setIsModalOpen(false);
        const newAttacks = [...attacks];
        newAttacks[selectedAttackIndex] = updatedAttack;
        onAttacksChange(newAttacks);
    };

    const handleRollAttackButtonClick = (bonus, attackName) => {
        const dice = 20;
        const times = 1;
        const value = rollDice(times, dice);

        let result = {
            type: "бросок",
            value: value,
            modifier: bonus,
            dice: dice,
            times: times,
            ability: `атаки ${attackName}`,
        };

        onRollButtonClick(result);
    };

    const handleRollDamageButtonClick = (damage, attackName) => {
        const numbers = damage.match(/-?\d+/g).map(Number);

        const times = numbers[0];
        const dice = numbers[1];
        const modifier = numbers.length > 2 ? numbers[2] : 0;

        const value = rollDice(times, dice);

        let result = {
            type: "бросок",
            value: value,
            modifier: modifier,
            dice: dice,
            times: times,
            ability: `урона ${attackName}`,
        };

        onRollButtonClick(result);
    };

    const columns = [
        {
            title: "Название",
            dataIndex: "name",
            width: "40%",
            render: (text) => <Link>{text}</Link>,
            onCell: (_, index) => ({
                onClick: () => handleModalOpen(index),
            }),
        },
        {
            title: "Бонус",
            dataIndex: "bonus",
            width: "20%",
            render: (bonus, attack) => (
                <Button
                    className="bonus-attack-button"
                    onClick={() =>
                        handleRollAttackButtonClick(bonus, attack.name)
                    }
                >
                    {modifierAsString(bonus)}
                </Button>
            ),
        },
        {
            title: "Урон",
            dataIndex: "damage",
            width: "40%",
            render: (damage, attack) => (
                <Button
                    className="damage-attack-button"
                    onClick={() =>
                        handleRollDamageButtonClick(damage, attack.name)
                    }
                >
                    {damage}
                </Button>
            ),
        },
    ];

    return (
        <Flex vertical align="end" gap={6}>
            <Flex gap={6}>
                <Button className="table-tool-btn" onClick={handleAddAttack}>
                    +
                </Button>
                <Button
                    className="table-tool-btn"
                    onClick={handleDeleteLastAttack}
                >
                    -
                </Button>
            </Flex>
            <Table
                className="attack-table"
                dataSource={datasource}
                columns={columns}
                size="small"
                pagination={false}
                scroll={{ y: 147 }}
            />
            {selectedAttackIndex != null && (
                <AttackModal
                    open={isModalOpen}
                    onClose={handleModalClose}
                    onDelete={handleDeleteAttack}
                    attack={attacks[selectedAttackIndex]}
                    character={character}
                />
            )}
        </Flex>
    );
};

export default AttacksTable;
