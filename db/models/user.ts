import { Column, DataType, Model, Scopes, Table } from 'sequelize-typescript';

const bcrypt = require('bcrypt');

@Scopes({})
@Table({
    timestamps: true,
    tableName: 'Users'
})
export default class User extends Model<User> {
    @Column({
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        type: DataType.UUIDV4
    })
    id: string;

    @Column({type: DataType.STRING})
    email?: string;

    @Column({
        type: DataType.STRING,
        set: function (value) {
            const salt = bcrypt.genSaltSync(10);
            const encryptedPass = bcrypt.hashSync(value, salt);
            this.setDataValue('password', encryptedPass);
        }
    })
    password?: string;


    @Column({
        type: DataType.STRING,
        get: function () {
            if (this.getDataValue('userObject')) {
                return JSON.parse(this.getDataValue('userObject'));
            }
        },
        set: function (data) {
            this.setDataValue('userObject', JSON.stringify(data));
        }
    })
    userObject?: string;


    comparePassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }


    /* Associations */


}
