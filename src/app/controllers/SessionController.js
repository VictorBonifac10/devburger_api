import * as Yup from 'yup';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.js'

class SessionController {

    //=====STORE==========//

    async store(request, response) {
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        });

        const isValid = await schema.isValid(request.body);

        const emailorPasswordIncorrect = () => {
            return response.status(401).json({
                error: 'Tenha certeza que seu email ou senha estão corretos!',
            });
        }

        if (!isValid) {
            emailorPasswordIncorrect();
        }

        const { email, password } = request.body;

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            emailorPasswordIncorrect();
        };

        const isSamePassword = await user.checkPassword(password);

        if (!isSamePassword) {
            emailorPasswordIncorrect();
        };

        return response.status(201).json({
            id: user.id,
            name: user.name,
            email,
            admin: user.admin,
            token: jwt.sign({ id: user.id, name: user.name }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

export default new SessionController();
