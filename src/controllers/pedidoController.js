const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pedido', (err, pedidos) => {
            if(err){
                res.json(err);
            }
            res.render('pedidos', {
                data: pedidos
            })
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO pedido set ?', [data], (err, pedido) => {
            console.log('Test (GUARDAR PEDIDO) ejecutado con exito');
            //console.log(pedido);
            res.redirect('/');
        });
    });
};

controller.edit = (req,res) => {
    const  { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pedido WHERE id = ?', [id], (err, pedido) => {
            console.log('Test (EDITAR PEDIDO) ejecutado con exito');
            res.render('pedido_edit', {
                data: pedido[0]
            });
        });
    });
};

controller.update = (req,res) => {
    const  { id } = req.params;
    const newpedido = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE pedido set ? WHERE id = ?', [newpedido, id], (err, rows) => {
            console.log('Test (ACTUALIZAR PEDIDO) ejecutado con exito');
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const  { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM pedido WHERE id = ?', [id], (err, rows) => {
            console.log('Test (ELIMINAR PEDIDO) ejecutado con exito');
            res.redirect('/');
        });
    });
};

module.exports = controller;