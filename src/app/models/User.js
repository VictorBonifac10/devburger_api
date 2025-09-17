import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';
import { password } from '../../config/database';
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (user) => {
      if(user.password){
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });
    return this;
  }

  async checkPassword(password){
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;


