
let myLeads = []
let oldLeads = []
const input = document.getElementById("input-el")
const Button = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-tab")



let leadsFromLocalStorage =JSON.parse( localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)


if (leadsFromLocalStorage) 
{
    myLeads = leadsFromLocalStorage
    render (myLeads)
    
}



tabBtn.addEventListener("click",function()
{


chrome.tabs.query({active: true, currentWindow : true },
    function(tabs)
    {
        myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads) )
    render (myLeads)
    
    }
)
   
})


function render(Leads)
{
    let listItem = " "
for(let i=0; i< Leads.length; i++)
{
    listItem += 
    `<li>

    <a target='_blank'  href =' ${ Leads[i]}'> ${ Leads[i]}
    </a>
     
     </li>
     `
     
}
ulEl.innerHTML = listItem
}

deleteBtn.addEventListener("dblclick",function()
{
    console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render (myLeads)
})

Button.addEventListener("click",()=>
{
    
    myLeads.push(input.value)
    // console.log(myLeads)
    input.value =" "
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render (myLeads)
})


