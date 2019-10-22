import { Column, DataType, Model, Scopes, Table } from 'sequelize-typescript';
import User from './user';

@Scopes({
    user: {
        include: [ () => User ]
    }
})
@Table({
    timestamps: false,
    tableName: 'Sessions'
})
export default class Session extends Model<Session> {
    @Column({
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        type: DataType.UUIDV4
    })
    session_id: string;

    @Column({
        type: DataType.INTEGER
    })
    expires: number;

    @Column({
        type: DataType.TEXT
    })
    data: string;

}
