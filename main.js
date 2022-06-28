
let b = [];

$(".btn-warning").on("click",()=> {
    $.ajax("http://myjson.dit.upm.es/api/bins/emgj",{
        success: (qiymat) =>{
            console.log(qiymat);
            b = qiymat;
            MapQilish(b)
        },
        error: function(err){
            console.log(err);
        }
    })
});
 
function MapQilish (qiymat){
    qiymat.map((value,index)=>{
        let div =`<div class="col-4 mt-4">
        <div class="card ">
        <img class"rasim" src="${value.img}" alt="">
        <h2>${value.name}</h2>
        <button class="btn btn-warning" onclick="korzina(${index})">Karzina</button>
        </div>
        </div>`;

    $("#ekran1").append(div)
    })
}

function MapKorzina (qiymat){
    qiymat.map((value,index)=>{
        let div =`<div class="col-4 mt-4">
        <div class="card ">
        <img class"rasim" src="${value.img}" alt="">
        <h2>${value.name}</h2>
        </div>
        </div>`;

    $("#offc").append(div)
    })
}

let korzina_data=[]

function korzina(i){
    console.log(i);
    korzina_data.push(b[i])
    MapKorzina(korzina_data)
}


$(".myInput").on("input", ()=>{
    // console.log($(".myInput").val());
    let yangiData= b.filter(soz=>{
        return soz.title.includes($(".myInput").val())
    })
    MapQilish(yangiData)
    // console.log(yangiData);
  })
