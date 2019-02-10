const td = [document.querySelector('.b1'),
            document.querySelector('.b2'),
            document.querySelector('.b3'),   
            document.querySelector('.b4'),   
            document.querySelector('.b5'),   
            document.querySelector('.u1'),   
            document.querySelector('.u2'),   
            document.querySelector('.u3'),   
            document.querySelector('.u4'),   
            document.querySelector('.u5'),   
            document.querySelector('.c1'),   
            document.querySelector('.c2'),   
            document.querySelector('.c3'),   
            document.querySelector('.c4'),   
            document.querySelector('.c5'),   
            document.querySelector('.k1'),   
            document.querySelector('.k2'),   
            document.querySelector('.k3'),   
            document.querySelector('.k4'),   
            document.querySelector('.k5'),   
            document.querySelector('.o1'),   
            document.querySelector('.o2'),   
            document.querySelector('.o3'),
            document.querySelector('.o4'),   
            document.querySelector('.o5')   
]
const phrases = ["Self organized means the team",
                "You all own it",
                "Done means done",
                "Go live ready",
                "asdfasd fasdff sdsds",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key",
                "Teamwork is key"];



const shuffle = (array)=> {
    let currentIndex = array.length, temporayValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
}

const generateRandomCard = (phrases) =>{
    for(i=0;i<12;i++){
        td[i].innerHTML=phrases[i];       
    }
    for(i=12;i<24;i++){
        td[i+1].innerHTML=phrases[i]; 
    }
}

const tog = (event) => {
    console.log(event); 
    if(event.target.style.background==="yellow"){
        event.target.style.background="lightblue";
        return;
    }
    event.target.style.background="yellow"; 
    
}

shuffle(phrases);
generateRandomCard(phrases);


td[0].addEventListener("click", tog);
td[1].addEventListener("click", tog);
td[2].addEventListener("click", tog);
td[3].addEventListener("click", tog);
td[4].addEventListener("click", tog);

td[5].addEventListener("click", tog);
td[6].addEventListener("click", tog);
td[7].addEventListener("click", tog);
td[8].addEventListener("click", tog);
td[9].addEventListener("click", tog);

td[10].addEventListener("click", tog);
td[11].addEventListener("click", tog);
td[12].addEventListener("click", tog);
td[13].addEventListener("click", tog);
td[14].addEventListener("click", tog);

td[15].addEventListener("click", tog);
td[16].addEventListener("click", tog);
td[17].addEventListener("click", tog);
td[18].addEventListener("click", tog);
td[19].addEventListener("click", tog);

td[20].addEventListener("click", tog);
td[21].addEventListener("click", tog);
td[22].addEventListener("click", tog);
td[23].addEventListener("click", tog);
td[24].addEventListener("click", tog);
