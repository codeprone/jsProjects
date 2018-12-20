
var array = ["The Plot in you","The Devil Wears Prada","Pierce the Viel",
             "Norma Jean","The Bled","Say Anything","The Midway State","We Came as Romans","W came as Romans","Counterparts",
               "Oh, Sleeper","A Skylit Drive","Anywhere But Here","An Old Age"];
var container = document.querySelector(".container");
var temp = array.sort(takeCare);
function takeCare(a,b){
    var temp_a,temp_b;
    if(a.indexOf("The ") == 0 || a.indexOf("An ") == 0 || a.indexOf("A ") == 0 ){
        temp_a = a.slice(a.indexOf(" ")+1);
    }
    if(b.indexOf("The ") == 0 || b.indexOf("An ") == 0 || b.indexOf("A ") == 0 ){
        temp_b = b.slice(b.indexOf(" ")+1);
    }
    if(temp_a == undefined)
        {
            if(temp_b==undefined)
                return a.localeCompare(b);
            else
                return a.localeCompare(temp_b);
        }
    else
        {
            if(temp_b==undefined)
                return temp_a.localeCompare(b);
            else
                return temp_a.localeCompare(temp_b);
        }

}

var str="<table>\n";
for( var i=0;i<temp.length;i++)
{
    str+= ("<tr> <td> <li>" + temp[i] + " </li> </td> </tr>\n ");
}
str+="</table>\n";
container.innerHTML=str;