function signuppagefun(){
    window.location.href ="signup.html"
}

function loginpagefun(){
    window.location.href ="login.html"
}


let moviesarr = [
{name:"Kung Fu Panda",
release:2008,
imgurl:"https://moviesnation.one/wp-content/uploads/2020/04/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL50_SY1000_CR006891000_AL_.jpg",
rating:4,
wood:"hooly"
},

{name:"Ratatouille",
 release:2007,
 imgurl:"https://moviesnation.one/wp-content/uploads/2020/03/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_QL50_SY1000_CR006741000_AL_.jpg",
 rating:4.5,
 wood:"hooly"},

 {name:"6 Undergrounds",
 release:2019,
 imgurl:"https://moviesnation.one/wp-content/uploads/2020/03/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_CR006751000_AL_.jpg",
 rating:5,
 wood:"hooly"},

 {name:"Resident Evil 6",
 release:2016,
   imgurl:"https://moviesnation.one/wp-content/uploads/2020/03/MV5BMTc0Mzc2OTQ0Ml5BMl5BanBnXkFtZTgwOTQ5MjE4MDI@._V1_-min.jpg",
 rating:3.5,
 wood:"hooly"},

 {name:"Arrival",
  release:2016,
    imgurl:"https://moviesnation.one/wp-content/uploads/2020/03/58e0eaf9e07cebf426e0dadc654a30ba-min-1-scaled.jpg",
     rating:3,
     wood:"hooly"},

  {name:"Wonder Woman",
   release:2017,
  imgurl:"https://moviesnation.one/wp-content/uploads/2020/03/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_QL50_SY1000_SX675_AL_.jpg",
   rating:5,
   wood:"hooly"},
        
  {name:"Doctor Strange",
  release:2016,
   imgurl:"https://moviesnation.one/wp-content/uploads/2020/05/Webp.net-compress-image-70.jpg",
   rating:4,
   wood:"hooly"},
        
    {name:"Ghooomketu",
    release:2020,
    imgurl:"https://bollydrip.xyz/wp-content/uploads/2022/01/ghoomketu.jpg",
    rating:4,
    wood:"booly"},
        
    {name:"RRR",
     release:2022,
     imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIdufIU-1f6ey43D0xIgDkfuiHWG5aun-lA&usqp=CAU",
    rating:5,
    wood:"booly"},
         
];

localStorage.setItem("movies",JSON.stringify(moviesarr));

let moviearr = JSON.parse(localStorage.getItem("movies"));

window.addEventListener("load",function(){
  displaydata(moviearr)
})


   function displaydata(moviearr)  
      {
        document.getElementById("movies").innerHTML =null;
      
      moviearr.map(function(ele){

     let box =document.createElement("div");
     let imbox =document.createElement("div");
     imbox.className ="imgbox"
     let image =document.createElement("img");
     image.src =ele.imgurl;
     imbox.append(image)

     let name =document.createElement("p");
     name.innerText =ele.name;

     let rel =document.createElement("p");
     rel.innerText =ele.release

     let rate =document.createElement("p");
     rate.innerText = `${  ele.rating  }    Stars`

     box.append(imbox,name,rel,rate )

  document.getElementById("movies").append(box)
})

}

function namesort(){


let selected = document.getElementById("sortbyname").value;
if(selected =="asc"){
  moviearr.sort(function(a,b){
    if(a.name>b.name)
    return 1;
    if(a.name<b.name)
    return -1;
    return 0;
  });
   displaydata(moviearr)
  }

  if(selected =="des"){
    moviearr.sort(function(a,b){
      if(a.name>b.name)
      return -1;
      if(a.name<b.name)
      return 1;
      return 0;
    });
     displaydata(moviearr)
    }
}


function ratesort(){


  let selected = document.getElementById("sortbyrating").value;
  if(selected =="lth"){
    moviearr.sort(((a,b)=>  a.rating-b.rating));
     displaydata(moviearr)
    }
  
    if(selected =="htl"){
      moviearr.sort(((a,b)=>  b.rating-a.rating));
       displaydata(moviearr)
      }
  }


  function releasesort(){

    let selected = document.getElementById("sortbyrelease").value;
    if(selected =="oldest"){
      moviearr.sort((a,b)=>a.release -b.release)
      // console.log(moviearr)
       displaydata(moviearr)
      }
    
      if(selected =="latest"){
        moviearr.sort((a,b)=>b.release -a.release)
        // console.log(moviearr)
         displaydata(moviearr)
        }
    }

    function woodfilter(){

      let selected = document.getElementById("fiterwood").value;
      if(selected =="boll"){
        let moviearr = JSON.parse(localStorage.getItem("movies"));
      moviearr =  moviearr.filter(function(ele){
          if (ele.wood == "booly")
          return ele;
        })
    //  console.log(moviearr)
         displaydata(moviearr)
        }
      
        if(selected =="holl"){
          let moviearr = JSON.parse(localStorage.getItem("movies"));

         moviearr = moviearr.filter(function(ele){
            if (ele.wood == "hooly")
            return ele;
          })
          // console.log(moviearr)
           displaydata(moviearr)
          }
      }










let slideimages =[
  "https://bit.ly/3Ju7BAN",
                  "https://bit.ly/3ElegfL",
                  "https://bit.ly/3LVkCVy",
                  "https://bit.ly/37dxWWC",
                  "https://wallpapercave.com/wp/wp8427796.jpg",
                  
                ]

let i =0;
let image =document.createElement("img");
setInterval(function(){
  
   if(i==slideimages.length){
     i=0;
   }
   image.src =slideimages[i]
    document.getElementById("slideshow").append(image)
    i++
},2000)

// faltu cheeze


// let url = "https://www.meme.net/babubhaiyaa.jpg";
// let process;


// function download(url) {
//   setTimeout(function () {
//     console.log(`Downloading ${url}`);

//     process = function (url) {
  
//       console.log(`Processing ${url}`);
//     }

//   }, 3000);

  
// }



// download(url);

// process("tattI");




// let employees = [
//   {
//       firstName: 'John',
//       lastName: 'Doe',
//       age: 27,
//       joinedDate: 'December 15, 2017'
//   },

//   {
//       firstName: 'Ana',
//       lastName: 'Rosy',
//       age: 25,
//       joinedDate: 'January 15, 2019'
//   },

//   {
//       firstName: 'Zion',
//       lastName: 'Albert',
//       age: 30,
//       joinedDate: 'February 15, 2011'
//   }
// ];
// console.log(employees)

// employees.sort((a, b) => {
//   return a.age - b.age;
// });

// console.log(employees)

// const fruits = ['Apple', 'Orange', 'Strawberry'];
// fruits.length = fruits.length-1;
// // fruits[5]="bnana"

// console.log(fruits);

// function getScores() {
//   return [70, 80, 90, 100];
// }

// let [,, , z] = getScores();

// // console.log(x); // 70
// // console.log(y); // 80
// console.log(z); // 90

// let msg = 'Multiline\n\
// string';

// console.log(msg[15]);
