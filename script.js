var comp_input = [5]
var user_input = []
var all_input = ["#"," "," "," "," ","X"," "," "," "," "]
var c = 1

function uip(user){
    all_input[user] = "O"
    ipwrite(user,"O")
    user_input = user_input.concat(user)
    if(wincheck(all_input,"O")){
        c = -1
    }
    else{
        comp = cip(user_input,comp_input)
        all_input[comp] = "X"
        ipwrite(comp,"X")
        comp_input = comp_input.concat(comp)
        if(wincheck(all_input,"X")){
            c = -2
        }
        else{
            c = c+2
        }
    }
    if(c>=9){
        document.getElementById("main").innerHTML = '<p class="drawdef">Draw</p><button class="reset-btn" onclick=resetfn()>Reset</button>'
    }
    else if(c==-1){
        document.getElementById("main").innerHTML = '<p class="Windef">User Won</p><button class="reset-btn" onclick=resetfn()>Reset</button>'
    }
    else if(c==-2){
        document.getElementById("main").innerHTML = '<p class="Windef">Computer Won</p><button class="reset-btn" onclick=resetfn()>Reset</button>'
    }
}

function ipwrite(val=0,sym=""){
    const writeobj = {
        1:"btn-1",2:"btn-2",3:"btn-3",
        4:"btn-4",5:"btn-5",6:"btn-6",
        7:"btn-7",8:"btn-8",9:"btn-9"
    }
    document.getElementById(writeobj[val]).innerHTML = sym
}

function wincheck(all_input,symbol){
    var check = 0
    if(all_input[1]== symbol && all_input[2] ==symbol && all_input[3] ==symbol){
        check = 1
    }
    else if(all_input[1]== symbol && all_input[4] ==symbol && all_input[7] ==symbol){
        check = 1
    }
    else if(all_input[1]== symbol && all_input[5] ==symbol && all_input[9] ==symbol){
        check = 1
    }
    else if(all_input[2]== symbol && all_input[5] ==symbol && all_input[8] ==symbol){
        check = 1
    }
    else if(all_input[3]== symbol && all_input[6] ==symbol && all_input[9] ==symbol){
        check = 1
    }
    else if(all_input[3]== symbol && all_input[5] ==symbol && all_input[7] ==symbol){
        check = 1
    }
    else if(all_input[4]== symbol && all_input[5] ==symbol && all_input[6] ==symbol){
        check = 1
    }
    else if(all_input[7]== symbol && all_input[8] ==symbol && all_input[9] ==symbol){
        check = 1
    }
    return(check)
}

function cip(user_input,comp_input){
    n = 0 
    ucheck = checkuserfn(comp_input,user_input)
    ccheck = checkcompfn(comp_input,user_input)
    if(ccheck){
        n = ccheck
    }
    else if(ucheck){
        n = ucheck
    }
    else{
        while(1){
            n = getRandomInt(10)
            if(n>0 && !(infn(comp_input,user_input,n))){
                break
            }
        }
    }
    return(n)
}

function checkuserfn(comp_input,user_input){
    comnum = 0
    numcheck = {
        1:[[2,3],[5,9],[4,7]] , 2:[[5,8],[1,3]] , 3:[[1,2],[6,9],[5,7]] ,
        4:[[1,7],[5,6]] , 5:[[2,8],[4,6]] , 6:[[3,9],[4,5]] ,
        7:[[1,4],[8,9],[3,5]] , 8:[[2,5],[7,9]] , 9:[[3,6],[7,8],[1,5]]
    }
    for(i=1;i<10;i++){
        if(!(infn(comp_input,user_input,i))){
            for(j=0;j<numcheck[i].length;j++){
                if(user_input.indexOf(numcheck[i][j][0])>= 0 && user_input.indexOf(numcheck[i][j][1])>=0){
                    comnum = i
                }
            }
        }
    }
    return comnum
}

function checkcompfn(comp_input,user_input){
    comnum = 0
    numcheck = {
        1:[[2,3],[5,9],[4,7]] , 2:[[5,8],[1,3]] , 3:[[1,2],[6,9],[5,7]] ,
        4:[[1,7],[5,6]] , 5:[[2,8],[4,6]] , 6:[[3,9],[4,5]] ,
        7:[[1,4],[8,9],[3,5]] , 8:[[2,5],[7,9]] , 9:[[3,6],[7,8],[1,5]]
    }
    for(i=1;i<10;i++){
        if(!(infn(comp_input,user_input,i))){
            for(j=0;j<numcheck[i].length;j++){
                if(comp_input.indexOf(numcheck[i][j][0])>= 0 && comp_input.indexOf(numcheck[i][j][1])>=0){
                    comnum = i
                }
            }
        }
    }
    return comnum
}

function infn(comp_input,user_input,n){
    if(comp_input.indexOf(n)>=0 || user_input.indexOf(n)>=0){
        return(true)
    }
    else{
        return(false)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) 
}

function resetfn(){
    location.reload()
}