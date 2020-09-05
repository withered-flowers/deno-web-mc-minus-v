import { DataTypes, Model } from '../mod.ts';

class User extends Model {
  static table = 'Users';
  static timestamp = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  };
}

export default User;