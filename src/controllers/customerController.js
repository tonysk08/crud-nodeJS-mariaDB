const controller = {};

controller.list = (req, res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM customers', (err,customers) =>{
            if(err)
            {
                res.json(err);
            }
            res.render('customers',)
        });
    });
};


controller.save = (req, res) => {res.send('save')};
controller.delete = (req, res) => {res.send('delete')};
controller.update = (req, res) => {res.send('update')};
controller.test = (req, res) => {res.send('hello World')};

module.exports = controller