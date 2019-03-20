const dataBase = require('../../DataBase').getInstance();
module.exports=  async (req, res)=>{
    try {
        const cafeModel = dataBase.getModel('Cafe');
        const id = req.params.id;

        if (!cafeModel) throw new Error('Cant connect to database');
        if (!id)throw new Error('Bad request');

        await cafeModel.destroy({
            where:{
                id
            }

        });

        const users = await cafeModel.findAll();

        res.render('cafePage', {users})
    }catch (e) {
        res.render('errorPage', {message: e.message})

    }
 };
