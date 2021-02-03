const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM platillo', (err, platillos) => {
            if(err){
                res.json(err);
            }
            res.render('platillos', {
                data: platillos
            })
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO platillo set ?', [data], (err, platillo) => {
            console.log(platillo);
            res.redirect('/');
        });
    });
};

controller.edit = (req,res) => {
    const  { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM platillo WHERE id = ?', [id], (err, platillo) => {
            res.render('platillo_edit', {
                data: platillo[0]
            });
        });
    });
};

controller.update = (req,res) => {
    const  { id } = req.params;
    const newPlatillo = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE platillo set ? WHERE id = ?', [newPlatillo, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const  { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM platillo WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;