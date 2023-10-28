class FuncoesHome {
    loadPageHome(req, res) {
        return res.render('openIncidentPage');
    }

    async createIncident(req, res) {
        return res.json({ "body": req.body }); // DESENVOLVIMENTO !!!!!
        // return res.redirect('/'); -- ATIVAR EM PRODUÇÃO !!!!!
    }
}

module.exports = new FuncoesHome();