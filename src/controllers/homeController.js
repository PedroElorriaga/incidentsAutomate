class FuncoesHome {
    loadPageHome(req, res) {
        return res.render('openIncidentPage');
    }

    createIncident(req, res) {
        return res.json({ "Status": "Chamado criado", "body": req.body });
    }
}

module.exports = new FuncoesHome();