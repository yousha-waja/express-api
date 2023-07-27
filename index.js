import express from "express";

const app = express();


app.use(express.json());

app.use(express.static('public'))

const greetings = {
    'english' : "Hello",

} 
app.get('/api/greet', function(req, res){
    const username = req.query.username;
    const age = req.query.age;
    const language = req.query.language;
    console.log(req.query);
    if(!greetings[language]){
        return res.json({
            error : 'Invalid language'
        })
    }
    const greeting = greetings[language];
    res.json({message: `Hello ${username}`,
             language: `${greeting}`
})
 });

app.post('/api/greet', function(res,req){
    const language = req.body.language;
    greetings[language] = req.body.greeting;

    res.json({
        status : 'success',
        message : `Added a greeting for ${language}`
    })

})
 /* app.get('/api/greet/:username', function(req, res){
    const username = req.params.username;
    const age = req.params.age;

    res.json({message: `Hello ${username}`
})
 }); */
const PORT = process.env.PORT || 4009;

app.listen(PORT, function(){
   console.log("App is restarting by itself on "+PORT)
});