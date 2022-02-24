module.exports = (sequelize, DataTypes) => {
    return sequelize.define('words', {
        word: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        definition: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        example: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        ipa: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        },
    }, {
        timestamps: false,
    });
};
