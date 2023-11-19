
let form = document.querySelector("form")
//control steps
let currentStep = 0;
let steps = document.querySelectorAll(".step");
let nextButton = document.querySelectorAll(".next");
let backButton = document.querySelectorAll(".back");
let numbers = document.querySelectorAll(".circle")

function updateStep(current){
    steps.forEach((step, index)=>{
        index === current ?  step.style.display = "flex" : step.style.display = "none"
    })

    numbers.forEach((num, index)=>{
        index <= current ? num.classList.add("current") : num.classList.remove("current")
        
    })
}
nextButton.forEach((next)=>{
    next.addEventListener("click", (e)=>{
        e.preventDefault();
        currentStep++;
        updateStep(currentStep);
    })
})
backButton.forEach((back)=>{
    back.addEventListener("click", (e)=>{
        e.preventDefault();
        currentStep--;
        updateStep(currentStep);
    })
})
// start 2ed step 
let planLabels = document.querySelectorAll(".step-2 .select-plan .plan label");

let planMony = document.querySelectorAll(".step-2 .select-plan .plan label p");
let checkBoxPlan = document.querySelector(".step-2 .toggel input")
let textPlan = document.querySelectorAll(".step-2 .toggel span")

let palnsInput = document.querySelectorAll("input[name='plan']")
let toggelButton = document.querySelector(".step-2 .toggel label .slider");

let monyPlans = [9, 12, 15]

function removeClassName(className, elements){
    for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove(className)
    }
}
function updateData(value, dataName){
    formData = {...formData, planeType : value}
}
planLabels.forEach((label)=>{
    label.addEventListener("click", (e)=>{
        removeClassName("selected",planLabels)
        e.target.classList.add("selected")
    })
})
toggelButton.addEventListener("click", (e)=>{
    console.log(textPlan)
    removeClassName("selected", textPlan)
    if(!checkBoxPlan.checked){
        planMony.forEach((mony, i)=>{
            mony.innerHTML = ` $ ${monyPlans[i] * 10}/ year`
            textPlan[2].classList.add("selected")
        })
    }else{
        planMony.forEach((mony, i)=>{
            mony.innerHTML = ` $ ${monyPlans[i]}/ month`
            textPlan[0].classList.add("selected")
        })
    }
})
//step 03
let servicesInput = document.querySelectorAll(".step-3 .service label input")

servicesInput.forEach((input)=>{
    input.addEventListener('click', (event) => {
        event.stopPropagation();
        event.target.checked ? event.target.parentElement.classList.add("selected") : event.target.parentElement.classList.remove("selected");
      });
})

// step 04
let services = document.querySelectorAll(".summary .service");
nextButton[2].addEventListener("click", (e)=>{
    let total = 0;
    for(let i = 0; i < 3; i++){
        if(form[4 + i].checked){
            document.querySelector(".summary .service p").innerHTML = `${form[4 + i].id}` 
            document.querySelector(".summary .service span").innerHTML = `$${form[4 + i].value} / mo` ;
            total = total + (i+3) * 3
        }
        if(form[10 + i].checked){
            services[1 + i].style.display = "flex"
            total = total + i
        }else{
            services[1 + i].style.display = "none"
        }
    }
    document.querySelector(".step-4 .total span").innerHTML = `${total} / mo`
})