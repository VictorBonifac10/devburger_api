import * as Yup from 'yup';
import Category from '../models/Category';
import User from '../models/User';

class CategoryController {

    //=====STORE==========//
    
    async store(request, response) {
        const schema = Yup.object({
            name: Yup.string().required(),
        });

        try {
            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors });
        }

        const { admin: isAdmin } = await User.findByPk(request.userId);

        if (!isAdmin) {
            return response.status(401).json();
        }

        const { filename: path } = request.file;
        const { name } = request.body;

        const CategoryExists = await Category.findOne({
            where: {
                name,
            },
        });

        if (CategoryExists) {
            return response.status(400).json({ error: 'Categoria já existente!' });
        }

        const { id } = await Category.create({
            name,
            path,
        });

        return response.status(201).json({ id, name });
    }

    //=====UPDATE==========//

    async update(request, response) {
        const schema = Yup.object({
            name: Yup.string(),
        });

        try {
            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors });
        }

        const { admin: isAdmin } = await User.findByPk(request.userId);

        if (!isAdmin) {
            return response.status(401).json();
        }

        const { id } = request.params;

        const CategoryExists = await Category.findByPk(id);

        if (!CategoryExists) {
            return response.status(400).json({ message: 'Tenha certeza que o ID da Categoria está correto!' })
        }

        let path;
        if (request.file) {
            path = request.file.filename
        }

        const { name } = request.body;

        if (name) {

            const CategoryNameExists = await Category.findOne({
                where: {
                    name,
                },
            });

            if (CategoryNameExists && CategoryNameExists.id === +id) {
                return response.status(400).json({ error: 'Categoria já existente!' });
            }
        }

        await Category.update(
            {
                name,
                path,
            },
            {
                where: {
                    id,
                },
            },
        );

        return response.status(200).json();
    }

    //=====INDEX==========//

    async index(request, response) {
        const categories = await Category.findAll();

        return response.json(categories)
    }
}

export default new CategoryController();