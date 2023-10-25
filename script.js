
var array =[
{
    id : "1",
    name: "hassan",
    country: "Nigeria",
    city : "sabon garri, kano"
},
{
    id : "2",
    name: "levi",
    country: "nigeria",
    city : "delta"
},
{
    id : "3",
    name: "mika",
    country: "nigeria",
    city : "Kano"
},
{
    id : "4",
    name: "Leera",
    country: "nigeria",
    city : "abuja"
},
{
    id : "5",
    name: "abiola",
    country: "nigeria",
    city : "lagos"
}

]

// show table data
function showtable(curarray){
        document.getElementById("mytable").innerHTML = `
        <tr class="bg-primary text-white fw-bold">
            <td>ID</td>
            <td>Name</td>
            <td>Country</td>
            <td>City</td>
        </tr>
        `;
    //    for checking array is empty
        if(curarray  == ""){
            document.getElementById("error").innerHTML = `.<span class="text-danger">Not Found!</span>`
        }
        else{
            document.getElementById("error").innerHTML = "";
            for(var i = 0 ; i < curarray.length;i++){
                document.getElementById("mytable").innerHTML += `
                <tr>
                <td>${curarray[i].id}</td>
                <td>${curarray[i].name}</td>
                <td>${curarray[i].country}</td>
                <td>${curarray[i].city}</td>
                </tr>
                `
            }
        }
}

// calling show table data method
showtable(array);


// take filtered data array 

var newarray = [];

// for searching method
document.getElementById("search").addEventListener("keyup", function(){
    var search = this.value.toLowerCase();

    newarray = array.filter(function (val){
        if(val.id.includes(search) || val.name.includes(search) || val.country.includes(search) || val.city.includes(search))
        {
            var newobj = {id : val.id, name: val.name, country: val.country, city: val.city};
            return newobj; 
        }
    })
    showtable(newarray);
})