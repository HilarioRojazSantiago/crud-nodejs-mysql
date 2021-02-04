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
            console.log('Test (GUARDAR PRODUCTO) ejecutado con exito');
            //console.log(platillo);
            res.redirect('/');
        });
    });
};

controller.edit = (req,res) => {
    const  { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM platillo WHERE id = ?', [id], (err, platillo) => {
            console.log('Test (EDITAR PRODUCTO) ejecutado con exito');
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
            console.log('Test (ACTUALIZAR PRODUCTO) ejecutado con exito');
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const  { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM platillo WHERE id = ?', [id], (err, rows) => {
            console.log('Test (ELIMINAR PRODUCTO) ejecutado con exito');
            res.redirect('/');
        });
    });
};

module.exports = controller;