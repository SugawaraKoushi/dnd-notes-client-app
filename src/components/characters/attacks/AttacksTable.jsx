import { Button, Flex, Table } from "antd";
import { useContext, useMemo, useState } from "react";
import "./index.css";
import { Link } from "react-router";
import AttackModal from "./AttackModal";
import { modifierAsString } from "../../services/ModifierService";
import { AttackContext } from "../context/AttackContext";
import { NotificationContext } from "../context/NotificationContext";
import { rollDice } from "../../services/RollDiceService";
import axios from "axios";
import { CharacterContext } from "../context/CharacterHeaderContext";

const AttacksTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { attacks, onAttacksChange } = useContext(AttackContext);
    const { character } = useContext(CharacterContext);
    const { onRollButtonClick } = useContext(NotificationContext);
    const [selectedAttackIndex, setSelectedAttackIndex] = useState(null);

    const datasource = useMemo(() => {
        return attacks.map((attack) => ({
            key: attack.id,
            name: attack.name,
            bonus:
                attack.proficiencyBonus +
                attack.additionalBonus +
                attack.abilityBonus,
            damage: attack.damage,
        }));
    }, [attacks]);

    const handleAddAttack = async () => {
        try {
            const url = "/attacks/create";
            const response = await axios.post(url, null, {
                params: {
                    characterId: character.id,
                },
            });
            const attack = response.data;
            onAttacksChange([...attacks, attack]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteLastAttack = async () => {
        if (attacks.length === 0) return;
        const lastAttackId = attacks[attacks.length - 1].id;
        await deleteAttack(lastAttackId);
        await getAttacks();
    };

    const handleDeleteAttack = async () => {
        const selectedAttackId = attacks[selectedAttackIndex].id;
        await deleteAttack(selectedAttackId);
        await getAttacks();
        setIsModalOpen(false);
    };

    const deleteAttack = async (attackId) => {
        try {
            const url = `/attacks/delete/${attackId}`;
            await axios.delete(url);
        } catch (error) {
            console.log(error);
        }
    };

    const getAttacks = async () => {
        try {
            const url = `/attacks/character/${character.id}`;
            const response = await axios.get(url);
            const newAttacks = response.data;
            onAttacksChange(newAttacks);
        } catch (error) {
            console.log(error);
        }
    };

    const updateAttack = async (attack) => {
        try {
            const url = `/attacks/update`;
            await axios.put(url, { ...attack });
        } catch (error) {
            console.log(error);
        }
    };

    const handleModalOpen = (index) => {
        setSelectedAttackIndex(index);
        setIsModalOpen(true);
    };

    const handleModalClose = async (updatedAttack) => {
        await updateAttack(updatedAttack);
        setIsModalOpen(false);
        await getAttacks();
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
            render: (text, record) => <Link>{text}</Link>,
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
