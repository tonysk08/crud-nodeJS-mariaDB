const controller = {};

controller.list = (req, res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM customers', (err,customers) =>{
            if(err)
            {
                res.json(err);
            }
            //console.log(customers)
            res.render('customers',{
                data:customers
            })
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO customers set ?',[data], (err,customers)=>{
            //console.log(customers);
            res.redirect('/');
        });
    })
};
controller.delete = (req, res) => {
    //console.log(req.params.id);

    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customers WHERE id = ?',[id], (err, rows) =>{
            res.redirect('/');
        });
    })
};
controller.edit = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customers WHERE id = ?',[id], (err, customers) =>{
            res.render('customer_edit',{
                data:customers[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const id = req.params.id;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customers SET ? WHERE id = ?',[newCustomer,id], (err, rows) =>{
            res.redirect('/');
        });
    });
};

controller.test = (req, res) => {res.send('hello World')};

module.exports = controller