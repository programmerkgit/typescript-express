import { Column, DataType, Model, Table } from 'sequelize-typescript';


const bcrypt = require('bcrypt');

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
    })
    get password(): string {
        return this.getDataValue('password');
    }

    set password(value: string) {
        const salt = bcrypt.genSaltSync(10);
        const encryptedPass = bcrypt.hashSync(value, salt);
        this.setDataValue('password', encryptedPass);
    }

    comparePassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }

    /* Associations */
}
