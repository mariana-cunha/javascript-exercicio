var appointments = {
  "06h30": {
    "title": "HIIT",
    "person": "Michael Goulart"
  },
  "07h00": {
    "title": "Zumba",
    "person": "Mariana Silva"
  },
  "07h30": {
    "title": "Power Jump",
    "person": "Alvaro Bigaton"
  },
  "08h00": {
    "title": "Fit Dance",
    "person": "Victor Bonifácio"
  },
  "08h30": {
    "title": "Gap",
    "person": "Michael Goulart"
  },
  "18h00": {
    "title": "Power Jump",
    "person": "Alvaro Bigaton"
  },
  "18h30": {
    "title": "Zumba",
    "person": "Mariana Silva"
  },
  "19h00": {
    "title": "HIIT",
    "person": "Victor Bonifácio"
  },
  "19h00": {
    "title": "Jiu-Jitsu",
    "person": "Beto Almeida"
  },
  "19h30": {
    "title": "Abdominal",
    "person": "Michael Goulart"
  },
  "20h00": {
    "title": "Fit Dance",
    "person": "Evandro Almeida"
  },
  "20h30": {
    "title": "Glúteos",
    "person": "Mariana Silva"
  }
}

for (var time in appointments) { 
  // console.log (time, appointments[time].title, appointments[time].person) 

  var divApp = document.createElement ("div") //cria uma div appoitments
  var divEvent = document.createElement("div") //event
  var divTime = document.createElement ("div") //time
  var divCircle = document.createElement ("div") //circle
  var pTime = document.createElement ("p") //p
  var pPerson = document.createElement ("p") //p
  var h2App = document.createElement ("h2")

  //adiciona classe nos elementos
  divApp.classList.add("appointment")
  divEvent.classList.add("event")
  divTime.classList.add("time")
  divCircle.classList.add("circle")

  pPerson.textContent = appointments[time].person
  pTime.textContent = time
  
  h2App.textContent = appointments[time].title

  divTime.appendChild(pTime)
  divApp.appendChild(divTime)

  divEvent.appendChild(h2App)
  divEvent.appendChild(pPerson)

  divApp.appendChild(divTime)
  divApp.appendChild(divCircle)
  divApp.appendChild(divEvent)

  var schedule = document.getElementById ("schedule")
  schedule.appendChild (divApp)

  //preencher a bolinha

  var dataAgenda = (new Date ("2018-05-15T" + time.replace('h', ':') + ":00Z"));
  
}



