import { Button, Flex, Table } from "antd";
import { useState } from "react";
import "./index.css";
import { Link } from "react-router";
import Attack from "../../../model/Attack";
import AttackModal from "./AttackModal";

const AttacksTable = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [attacks, setAttacks] = useState(props.attacks);
    const [attacksTableContent, setAttacksTableContent] = useState(
        props.attacksTableContent
    );
    const [selectedAttack, setSelectedAttack] = useState(null);

    const handleAddAttack = () => {
        const attack = new Attack();
        const newAttack = {
            key: attacks.length,
            name: attack.name,
            bonus: attack.proficiency,
            damage: attack.damage,
        };

        setAttacks([...attacks, attack]);
        setAttacksTableContent([...attacksTableContent, newAttack]);
    };

    const handleDeleteLastAttack = () => {
        attacks.pop();
        attacksTableContent.pop();
        setAttacks([...attacks]);
        setAttacksTableContent([...attacksTableContent]);
    };

    const handleModalOpen = (index) => {
        setSelectedAttack(attacks[index]);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
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
            render: (
                _,
                record // `_` заменяет неиспользуемый параметр `text`
            ) => <Button className="bonus-attack-button">0</Button>,
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
                dataSource={attacksTableContent}
                columns={columns}
                size="small"
                pagination={false}
                scroll={{ y: 147 }}
            />
            <AttackModal
                open={isModalOpen}
                onClose={handleModalClose}
                attack={selectedAttack}
            />
        </Flex>
    );
};

export default AttacksTable;
