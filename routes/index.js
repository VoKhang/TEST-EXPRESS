const HomeController = require("../app/controllers/HomeController");
const User = require("../app/models/User");

function routes(app) {

    app.post('/user', function(req, res) {
        User.create({
            username: req.body.username,
            age: 20,
            email: 'a@mm.cc',
            password: '123456',
            address: 'HCMC'
        })
        .then(() => {
            res.render()
        })
        .catch(er => {
            console.log(er);
        })
    })

    app.get('/', HomeController.index)
    
    app.post("/", function (req,res) {
    
        console.log(req.body); // log request body in terminal
    
        if(req.body.fname =="John" && req.body.lname == "Doe") {
            res.redirect("home")
        }
        else{
            res.redirect('incorrect')
        }
    })
    
    app.get("/home", HomeController.home)
    
    app.get("/incorrect", function(req,res){
        res.render('incorrect')
    })
    
    // Signin ejs first - page working
    
    app.get("/signin", function(req,res){
        res.render('signinpage')
    })
    
    
    
    
    
    
    
    //query string
    
    const users = [
        {
            id: 1,
            name: 'Nguyen Van A',
            age: 18
        },
        {
            id: 2,
            name: 'Nguyen Van B',
            age: 23
        },
        {
            id: 3,
            name: 'Tran Van C',
            age: 17
        },
        {
            id: 4,
            name: 'Ta Thi D',
            age: 18
        },
        {
            id: 5,
            name: 'Tran Van E',
            age: 20
        },
        {
            id: 6,
            name: 'Nguyen Van F',
            age: 12
        }
    ]
    
    app.get('/user/:id', function (req, res) {
        const user = users.find(user => user.id == req.params.id)
        
        res.render('user', {
            user
        })
    })
    
    app.get('/search', (req, res) => {
        const nameInput = req.query.name
        const ageInput = req.query.age
    
        const tempUsers = []
    
        for (let i = 0; i < users.length; i++) {
            if (users[i].name.includes(nameInput) || users[i].age == ageInput) {
                tempUsers.push(users[i])
            }
        }
    
        res.render('search', {
            usersData: tempUsers.length != 0 ? tempUsers : users
        })
    })
    
    
}

module.exports = routes



