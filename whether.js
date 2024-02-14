 let container = document.querySelector('.container')



let url="https://api.openweathermap.org/data/2.5/weather?units=metric"
let apikey = "1ac41d822f470089588e62f6ac6cbdce";




function search(){
   let input = document.getElementById('input')
       
   if(input.value){
    fetch(url+`&appid=${apikey}&q=${input.value}`)
        .then(response => response.json())
        .then(data => {

            console.log(data);
           let city= data.name
            let temp = data.main.temp

            let p1 = document.getElementById('city')
             p1.innerText = city
               
             let p2 = document.getElementById('temp')
             p2.innerHTML = temp+'<sup>o</sup>'
            
             let p3 = document.getElementById('desc')
                 p3.innerText= data.weather[0].description

            let ws = document.getElementById('ws')
            ws.innerText='Wind Speed '+ data.wind.speed +' m/s'
            
            let humit = document.getElementById('humit')
            humit.innerHTML= 'Humidity '+data.main.humidity+' g/m'+'<sup>3</sup>'
            

            
        //    let time = document.getElementById('date')
        //    let mytime = new Date().toDateString()
        //        time.innerText = mytime

                if(temp>26){
                    container.style.backgroundImage = "url('Bg-1.webp')";

                }else if(temp>20 && temp<26){
                    container.style.backgroundImage = "url('Bg-2.webp')";


                }else{
                    container.style.backgroundImage = "url('Bg-3.webp')";

                }

input.value=''

        })

   }else{
    alert('Invalid city name')
   }

}