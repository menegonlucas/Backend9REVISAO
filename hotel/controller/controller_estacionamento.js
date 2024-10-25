const con = require('../connect/banco').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let veiculo_placa = req.body.veiculo_placa;
    let veiculo_marca = req.body.veiculo_marca;
    let veiculo_modelo = req.body.veiculo_modelo;
    let data_entrada = req.body.data_entrada;
    let data_saida = req.body.data_saida;

    let query = 'INSERT INTO clientes (cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida) VALUES';
    query += ('${cliente_id}', '${veiculo_placa}', '${veiculo_marca}', '${veiculo_modelo}', '${data_entrada}', '${data_saida}');
    con.query(query, (err, result) => {
    if (err) {
        res.status(500).json(err)
    } else {
        res.status(201).json(result)
    }
})
}

const read = (req, res) => {
    con.query('SELECT * FROM estacionamento', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

module.exports = {
    create,
    read
}