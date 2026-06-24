let fridgeitems=[];
const search=document.querySelector("#inp-search");
const selected=document.querySelector(".selected");
const stocked=document.querySelector(".stocked");
const stockh3=document.createElement("h3");

function setingredients(){
    selected.innerHTML="";
    fridgeitems.forEach((fitem)=>{
        const items=document.createElement("div");
        items.classList.add("items");
        items.innerHTML=`<p>${fitem}<button id='item-btn'>X</button></p>`
        selected.appendChild(items);

        // item remove button 

        const removebtn=items.querySelector("button");
        removebtn.addEventListener("click",(evt)=>{
            fridgeitems=fridgeitems.filter((unit)=>{
                return(unit.toLowerCase()!==fitem.toLowerCase());
            });
            setingredients();
            selquickadd();
            updaterecipes();
        });

    })
    stockh3.innerText="";
    stockh3.innerText=`${fridgeitems.length} Ingredients Stocked`;
    stocked.appendChild(stockh3);
}
setingredients();

function searchitems(){
    search.addEventListener("keydown",(key)=>{
        if(key.target.value!==""){
            let igrename=key.target.value.trim();
            if(key.code==="Enter"|| key.code===13){
                igrename=key.target.value.trim();
                let isDuplicate=fridgeitems.some((items)=>{
                    return ((items.toLowerCase())===(igrename.toLowerCase()));
                })
                if(!isDuplicate){
                    fridgeitems.push(igrename);
                }
                search.value=""
                setingredients();
                selquickadd();
                updaterecipes();
            }
            }
        }
    )
}
searchitems();

// selecting quick add

let quickadd=[
{
iconname:'Milk',
icon:'<svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-milk-icon lucide-milk"><path d="M8 2h8"/><path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"/><path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"/></svg>',
},
{
    iconname:'Eggs',
    icon:'<i class="fa-solid fa-egg">'
},
{
    iconname:'Cheese',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M576 304.2L576 320L64 320C64 300 74 281.3 90.6 270.2L338.9 104.7C347.5 99 357.5 96 367.8 96C482.8 96 576 189.2 576 304.2zM576 368L576 480C576 515.3 547.3 544 512 544L128 544C92.7 544 64 515.3 64 480L64 368L576 368z"/></svg>'
},
{
    iconname:'Bread',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 496L128 320C92.7 320 64 291.3 64 256C64 39.5 576 39.5 576 256C576 291.3 547.3 320 512 320L512 496C512 522.5 490.5 544 464 544L176 544C149.5 544 128 522.5 128 496z"/></svg>'
},
{
    iconname:'Rice',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M240 104C240 90.7 250.7 80 264 80L280 80C293.3 80 304 90.7 304 104C304 117.3 293.3 128 280 128L264 128C250.7 128 240 117.3 240 104zM264 152L280 152C293.3 152 304 162.7 304 176C304 189.3 293.3 200 280 200L264 200C250.7 200 240 189.3 240 176C240 162.7 250.7 152 264 152zM120 224L136 224C149.3 224 160 234.7 160 248C160 261.3 149.3 272 136 272L120 272C106.7 272 96 261.3 96 248C96 234.7 106.7 224 120 224zM64 347.4C64 332.3 76.3 320 91.4 320L548.5 320C563.6 320 575.9 332.3 575.9 347.4C575.9 417.9 531.5 478.1 469.2 501.5L467.5 516C465.5 532 451.9 544 435.7 544L204.2 544C188.1 544 174.4 532 172.4 516L170.6 501.6C108.4 478.1 64 417.9 64 347.4zM288 248C288 234.7 298.7 224 312 224L328 224C341.3 224 352 234.7 352 248C352 261.3 341.3 272 328 272L312 272C298.7 272 288 261.3 288 248zM192 248C192 234.7 202.7 224 216 224L232 224C245.3 224 256 234.7 256 248C256 261.3 245.3 272 232 272L216 272C202.7 272 192 261.3 192 248zM168 152L184 152C197.3 152 208 162.7 208 176C208 189.3 197.3 200 184 200L168 200C154.7 200 144 189.3 144 176C144 162.7 154.7 152 168 152zM384 248C384 234.7 394.7 224 408 224L424 224C437.3 224 448 234.7 448 248C448 261.3 437.3 272 424 272L408 272C394.7 272 384 261.3 384 248zM360 152L376 152C389.3 152 400 162.7 400 176C400 189.3 389.3 200 376 200L360 200C346.7 200 336 189.3 336 176C336 162.7 346.7 152 360 152zM480 248C480 234.7 490.7 224 504 224L520 224C533.3 224 544 234.7 544 248C544 261.3 533.3 272 520 272L504 272C490.7 272 480 261.3 480 248zM456 152L472 152C485.3 152 496 162.7 496 176C496 189.3 485.3 200 472 200L456 200C442.7 200 432 189.3 432 176C432 162.7 442.7 152 456 152zM360 80L376 80C389.3 80 400 90.7 400 104C400 117.3 389.3 128 376 128L360 128C346.7 128 336 117.3 336 104C336 90.7 346.7 80 360 80z"/></svg>'
}
];

const iconcontainer=document.querySelector(".icon-container");

function selquickadd(){
    iconcontainer.innerHTML="";
    quickadd.forEach((quick)=>{
        let iconcard=document.createElement("div");
        iconcard.classList.add("icon-card");

        let isduplicate=fridgeitems.some((items)=>{
            return((items.toLowerCase())===(quick.iconname.toLowerCase()));
        });

        if(isduplicate){
            iconcard.classList.add("active");
        }
        let span1=document.createElement("span");
        span1.classList.add("icon");
        span1.innerHTML=quick.icon;
        let span2=document.createElement("span");
        span2.classList.add("icon-name");
        span2.innerHTML=quick.iconname;
        iconcard.appendChild(span1);        
        iconcard.appendChild(span2);
        iconcontainer.appendChild(iconcard);        
        iconcard.addEventListener("click",(evt)=>{
        isduplicate=fridgeitems.some((items)=>{
            return((items.toLowerCase())===(quick.iconname.toLowerCase()));
        });
        if(!isduplicate){
            fridgeitems.push(quick.iconname);
            iconcard.classList.add("active");
        }
          else{
            fridgeitems=fridgeitems.filter((unit)=>{
                return(unit.toLowerCase()!==quick.iconname.toLowerCase());
            })
            iconcard.classList.remove("active");
          }
          setingredients();
          updaterecipes(); 
        });
    })
}
selquickadd();



// what you can cook

// api work
let apiKeys=[
    "1667a0680e1840efa66c092d79cab985", 
    "ed5962ee49cf4da08089d587fe2e5a61",
    "aa175c64c8164fe8a36862aa382ff096",
    "7abfe218aa6442de9e76c6256d3fb98f"
];
let currentKeyIndex=0;
function getAPIKey(){
    return apiKeys[currentKeyIndex];
}
function rotateapikey(){
    if(currentKeyIndex<apiKeys.length-1) {
        currentKeyIndex++;
    }
}

const dishes=document.querySelector(".dishes"); 

async function updaterecipes(){
    dishes.innerHTML=`
                 <div class='spinner-container'>
                        <div class='spinner'></div>
                    </div>`;
    let newfridgeitems=fridgeitems.join(",");
    console.log(newfridgeitems);
    
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${getAPIKey()}&ingredients=${newfridgeitems}&number=10&ranking=2`;
    try{
    const response=await fetch(url);
        if(response.status===402 || response.status===429){
            rotateapikey();
            return updaterecipes();
        }
    const recipedata=await response.json();

dishes.innerHTML="";
    
    recipedata.forEach((data)=>{
    
    if(data.usedIngredientCount===0)return;

    let card=document.createElement("div")
    card.classList.add("card");
        card.addEventListener("click",()=>{

            let missed=[];
            let usedigr=[];
            data.missedIngredients.forEach((mis)=>{
                missed.push(mis.name);
            });
            data.usedIngredients.forEach((used)=>{
                usedigr.push(used.name);
            })

            showrecipeins(data.id,missed,usedigr);
        })
    let profile=document.createElement("div");
    profile.classList.add("profile");
    let image=document.createElement("img");
    image.src=data.image?data.image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D';
    image.onerror=function(){
        this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'
        image.onerror=null;
    }
    image.setAttribute("alt","photo");
    let desc=document.createElement("div")
    desc.classList.add("desc");
    let ingre=document.createElement("div")
    ingre.classList.add("ingre");
    

    let span1=document.createElement("span");
    if(data.missedIngredientCount===0){
    span1.textContent=`Ready to cook! (${data.usedIngredientCount}/${data.usedIngredientCount}) Ingredients`;
    }
    else{
    ingre.classList.add("mising");
    span1.textContent=`Missing items (${data.usedIngredientCount}/${data.usedIngredientCount+data.missedIngredientCount}) Ingredients`;
    }
    
    let h4=document.createElement("h4");
    h4.innerText=`${data.title}`;
    ingre.appendChild(span1);
    desc.appendChild(ingre);
    desc.appendChild(h4);
    profile.appendChild(image);
    card.appendChild(profile);
    card.appendChild(desc);
    dishes.appendChild(card);


    })
}
catch{
    dishes.innerText="Error Loading Reecipe";
}
}
updaterecipes();

// modal code

const modal=document.querySelector(".modal");
const modaltitle=document.querySelector(".card-right h2");
const calspan=document.querySelector("#calo");
const fatspan=document.querySelector("#fat");
const mising=document.querySelector(".missing-list");
const listitems=document.querySelector(".list-items");
const guidelist=document.querySelector(".guide-list");
const modalimg=document.querySelector("#modal-img");

async function showrecipeins(recipeid,missed,usedigr){
    modal.classList.add("active");
    if(modaltitle)modaltitle.innerText="Loading...";
    calspan.innerText="Calculating"
    fatspan.innerText="Calculating";
    mising.innerHTML="";
    
    listitems.innerHTML="";
    guidelist.innerHTML="<li>Fetching cooking steps...</li>";

    const url = `https://api.spoonacular.com/recipes/${recipeid}/information?includeNutrition=true&apiKey=${getAPIKey()}`;

    try{
        const response=await fetch(url);
        if(response.status===402 || response.status===429){
            rotateapikey();
            return showrecipeins(recipeid,missed,usedigr);
        }
        const data=await response.json();

        modaltitle.innerText=data.title;
        modalimg.src=data.image?data.image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D';
        
        modalimg.onerror=function(){
            this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D';
            this.onerror=null;
        };

        const calories=data.nutrition.nutrients.find(n=> n.name==="Calories");
        calspan.innerText=calories?`${Math.round(calories.amount)} ${calories.unit}`:"---";
        const fat=data.nutrition.nutrients.find(n=> n.name==="Fat");
        fatspan.innerText=fat?`${Math.round(fat.amount)} ${fat.unit}`:"---";

        listitems.innerHTML="";
        mising.innerHTML="";
  
            if(usedigr){
                usedigr.forEach((val)=>{
                    let haveli=document.createElement("li");
                    haveli.innerText=`\u2714 ${val}`;
                    listitems.appendChild(haveli);
                })
            }
            if(missed){
                missed.forEach((val)=>{
                    let misli=document.createElement("li");
                    misli.innerText=`\u2715 ${val}`;
                    mising.appendChild(misli);
                })
            }

        if(data.analyzedInstructions.length>0){
            guidelist.innerHTML="";
            data.analyzedInstructions[0].steps.forEach((stepitem)=>{
                let li=document.createElement("li");
                li.innerText=stepitem.step;
                guidelist.appendChild(li);
            });
        }
        else{
            guidelist.innerHTML=`<li>No Detailed Cooking Steps</li>`;
        }
    }

    catch{
        modal.innerHTML="Error Loading Recipe"
    }

};

const bg=document.querySelector(".bg");
bg.addEventListener("click",()=>{
    modal.classList.remove("active");
});
