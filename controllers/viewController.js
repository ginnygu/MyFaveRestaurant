module.exports = {
    showRes(req, res){
        res.format({
            html() {
                res.render('restaurants/index', { rest: res.locals.data });
                
            },
        });
    },
};