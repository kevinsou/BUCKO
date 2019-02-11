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
const winH1 = document.querySelector('.win');
const phrases = ["Self organized means the team",
                "You all own it",
                "Done means done",
                "Go live ready",
                "phrase holder 1",
                "Teamwork is key",
                "phrase holder 2",
                "phrase holder 3",
                "phrase holder 4",
                "phrase holder 5",
                "phrase holder 6",
                "phrase holder 7",
                "phrase holder 8",
                "phrase holder 9",
                "phrase holder 10",
                "phrase holder 12",
                "phrase holder 13",
                "phrase holder 14",
                "phrase holder 15",
                "phrase holder 16",
                "phrase holder 17",
                "phrase holder 18",
                "phrase holder 19",
                "phrase holder 20"];


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
    }else{
        event.target.style.background="yellow"; 
    }
    win(td);
}

const win = (td) => {
    if(
        //horizontal
        td[0].style.background==="yellow" &&
        td[1].style.background==="yellow" &&
        td[2].style.background==="yellow" &&
        td[3].style.background==="yellow" &&
        td[4].style.background==="yellow" ||

        td[5].style.background==="yellow" &&
        td[6].style.background==="yellow" &&
        td[7].style.background==="yellow" &&
        td[8].style.background==="yellow" &&
        td[9].style.background==="yellow" ||

        td[10].style.background==="yellow" &&
        td[11].style.background==="yellow" &&
        td[12].style.background==="yellow" &&
        td[13].style.background==="yellow" &&
        td[14].style.background==="yellow" ||

        td[15].style.background==="yellow" &&
        td[16].style.background==="yellow" &&
        td[17].style.background==="yellow" &&
        td[18].style.background==="yellow" &&
        td[19].style.background==="yellow" ||

        td[20].style.background==="yellow" &&
        td[21].style.background==="yellow" &&
        td[22].style.background==="yellow" &&
        td[23].style.background==="yellow" &&
        td[24].style.background==="yellow" ||

        //vertical
        td[0].style.background==="yellow" &&
        td[5].style.background==="yellow" &&
        td[10].style.background==="yellow" &&
        td[15].style.background==="yellow" &&
        td[20].style.background==="yellow" ||
        
        td[1].style.background==="yellow" &&
        td[6].style.background==="yellow" &&
        td[11].style.background==="yellow" &&
        td[16].style.background==="yellow" &&
        td[21].style.background==="yellow" ||

        td[2].style.background==="yellow" &&
        td[7].style.background==="yellow" &&
        td[12].style.background==="yellow" &&
        td[17].style.background==="yellow" &&
        td[22].style.background==="yellow" ||
        
        td[3].style.background==="yellow" &&
        td[8].style.background==="yellow" &&
        td[13].style.background==="yellow" &&
        td[18].style.background==="yellow" &&
        td[23].style.background==="yellow" ||

        td[4].style.background==="yellow" &&
        td[9].style.background==="yellow" &&
        td[14].style.background==="yellow" &&
        td[19].style.background==="yellow" &&
        td[24].style.background==="yellow" ||

        //cross
        td[0].style.background==="yellow" &&
        td[6].style.background==="yellow" &&
        td[12].style.background==="yellow" &&
        td[18].style.background==="yellow" &&
        td[24].style.background==="yellow" ||
        
        td[4].style.background==="yellow" &&
        td[8].style.background==="yellow" &&
        td[12].style.background==="yellow" &&
        td[16].style.background==="yellow" &&
        td[20].style.background==="yellow" 
        
    ){
        //console.log("you win");
        window.location.replace("winPage.html");
    }
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
