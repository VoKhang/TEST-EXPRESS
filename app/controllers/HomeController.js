class HomeController {

    // [GET] /
    index(req, res) {
        const array=[
            {name:"SPA",price:"$1000"},
            {name:"SPB",price:"$2000"}
        ]
    
     
        res.render('index', {
            sanpham: array,
            title: '123',
        })
    
    
        // res.json(array)
    }

    // [GET] /home
    home(req, res) {
        res.render('home')
    }

}

module.exports = new HomeController();