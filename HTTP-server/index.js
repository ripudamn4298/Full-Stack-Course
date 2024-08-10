const express = require('express')
const app = express()
const port = 3000

const users = [{
  name:"John",
  kidneys:[{
    healthy:false
  }]
}]
app.use(express.json());

app.get('/', function(req, res)  {
  const johnKidneys = users[0].kidneys
  const numberOfKidneys = johnKidneys.length
  let healthyKidneys = 0;
  for(let i=0;i<numberOfKidneys;i++){
    if(johnKidneys[i].healthy == true){
      healthyKidneys++;
    }
  }
  const unhealthyKidneys = numberOfKidneys - healthyKidneys;
  res.json({
    numberOfKidneys,healthyKidneys,unhealthyKidneys
  })

})
app.post('/',function(req,res){
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy:isHealthy
  })
  res.json({
    msg:"Done"
  })
})

app.put('/', function(req,res){
  for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
})

app.delete('/',function(req,res){
  let newKidneys = [];
  for(let i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy){
      newKidneys.push(users[0].kidneys[i]);
    }
  }
  users[0].kidneys= newKidneys;
  res.json({msg:"Done"});

})


app.listen(port);