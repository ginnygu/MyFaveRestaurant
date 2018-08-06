module.exports = {
    showRes(req, res){
        res.format({
            html() {
                res.render('restaurants/index', { rest: res.locals.data });
                
            },
        });
    },

    createRes(req, res){
        res.format({
            html() {
                res.render('restaurants/create');
            },
        });
    },

    pickRest(req, res){
        res.format({
            html(){
                res.render('restaurants/pickone')
            },
        });
    },

    updateRes(req, res){
        res.format({
            html(){
                res.render('restaurants/update', { rest: res.locals.data })
            }
        })
    },

    findFromCat(req, res){
        res.format({
            html(){
                res.render('restaurants/filterbycat', { finds: res.locals.finds })
            }
        })
    }
    
};