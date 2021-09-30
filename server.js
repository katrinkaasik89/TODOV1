const express= require('express');
const ejs=require('ejs');
const date = require(__dirname+'/getDate.js'); // lisad mooduli, mille oled ise kirjutanud
const app=express();

app.set('view engine', ejs);
app.use(express.static('public')); //server tohib v'lastada kasutajale faili public
app.use(express.urlencoded({extended: true}));

let toDoList=[];


    app.get('/', (req, res)=> {
        let today = date.getTodayDateLong();
        console.log(typeof(today));
        res.render('index.ejs',  {date: today, myToDo: toDoList }); // koos htmliga v2ljastab andmed, need kasutajale, pakitakse kokku, loeb lahti, systitud need andmed sinna
    
});

    app.post('/', (req, res) => {
        let userTask=req.body.newTask;
        toDoList.push(userTask);
        console.log(toDoList);
        res.redirect('/');
    });

    app.post('/delete', (req, res)=> {               //DELETE KOOD SIIN
        let itemToDelete=req.body.checkbox;
        for(let i=0; i < toDoList.length; i++) {
            if(toDoList[i]===itemToDelete){
                toDoList.splice(i,1);
            }
        }

        res.redirect('/');
    });

    app.get('*', (req, res)=>{ // t2rn on n8 k6ik, et kui neid kindlaid vsteid pole, siis tuleb
        res.send("404 not found");
    });

app.listen(3000, () => { //oootab kuni tuleb pordile 3000 p2ring ja tagasiside
    console.log('Server is running on Port 3000');

});