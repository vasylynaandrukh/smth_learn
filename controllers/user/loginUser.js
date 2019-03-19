const dataBase = require('../../DataBase').getInstance();

module.exports = async (req, res) => {
   try {
      const cafeModel= dataBase.getModel('Cafe');
      const {name, password} = req.body;
      if (!cafeModel) throw new Error('Cant connect to database');
      if (!name || !password)throw new Error('Please fill in  empty field');
      const user = await cafeModel.findOne({
          where:{
              name,
              password
          }
      });
      if (!user) throw new Error('You cant use this super-puper service');
      const users = await cafeModel.findAll({});
      res.render('cafePage', {users})

   } catch (e) {
       res.render('errorPage', {message: e.message})
   }
};
