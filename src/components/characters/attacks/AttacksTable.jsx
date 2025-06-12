import { Button, Flex, Table } from "antd";
import { useContext, useMemo, useState } from "react";
import "./index.css";
import { Link } from "react-router";
import Attack from "../../../model/Attack";
import AttackModal from "./AttackModal";
import { modifierAsString } from "../../services/ModifierService";
import { AttackContext } from "../context/AttackContext";

const AttacksTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { attacks, character, onAttacksChange } = useContext(AttackContext);
    const [selectedAttackIndex, setSelectedAttackIndex] = useState(null);

    const datasource = useMemo(() => {
        return attacks.map((attack, index) => ({
            key: index,
            name: attack.name,
            bonus: attack.proficiencyBonus + attack.additionalBonus + attack.abilityBonus,
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

    const handleModalOpen = (index) => {
        setSelectedAttackIndex(index);
        setIsModalOpen(true);
    };

    const handleModalClose = (updatedAttack) => {
        setIsModalOpen(false);
        console.log(updatedAttack);
        
        const newAttacks = [...attacks];
        newAttacks[selectedAttackIndex] = updatedAttack;
        onAttacksChange(newAttacks);
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
            render: (bonus) => (
                <Button className="bonus-attack-button">
                    {modifierAsString(bonus)}
                </Button>
            ),
        },
        {
            title: "Урон",
            dataIndex: "damage",
            width: "40%",
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
                    attack={attacks[selectedAttackIndex]}
                    character={character}
                />
            )}
        </Flex>
    );
};

export default AttacksTable;
