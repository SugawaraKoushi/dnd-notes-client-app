import { Button, Flex, Table } from "antd";
import { useState } from "react";
import "./index.css";
import { Link } from "react-router";

const AttacksTable = (props) => {
    const [attacks, setAttacks] = useState(props.attacks);

    const handleAddAttack = () => {
        const newAttack = {
            key: attacks.length,
            name: "Меч",
            bonus: 0,
            damage: "1к12",
        };

        setAttacks([...attacks, newAttack]);
    };

    const handleDeleteLastAttack = () => {
        attacks.pop();
        setAttacks([...attacks]);
    };

    const handleAttackSettingsModalOpen = (row) => {
        console.log(row);
    };

    const columns = [
        {
            title: "Название",
            dataIndex: "name",
            width: "40%",
            render: (text) => <Link>{text}</Link>,
            onCell: (record) => ({
                onClick: () => handleAttackSettingsModalOpen(record),
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
                dataSource={attacks}
                columns={columns}
                size="small"
                pagination={false}
                scroll={{ y: 147 }}
            />
        </Flex>
    );
};

export default AttacksTable;
