const getUser = () => {
    let genderSelected = document.querySelector('input[name="gender"]:checked').value,
    rangeSelected = document.getElementById("range").value,
    usersDiv = document.getElementById("users"),
    divNode,
    pNameNode, pInfoNode,
    nameNode, infoNode, picNode;
    
    if (usersDiv.children.length != 0){
        let totalChildren = usersDiv.children.length;
        for (let i=0 ; i <totalChildren ; i++){
            usersDiv.removeChild(usersDiv.childNodes[0]);
        } 
    }

    fetch(`https://randomuser.me/api/?gender=${genderSelected}&results=${rangeSelected}`)
        .then((data) => { return data.json() })
        .then((data) => {
            for (let i=0 ; i<rangeSelected; i++){
                divNode  = document.createElement('div');
                pNameNode= document.createElement('p');
                pNameNode.setAttribute("class", "userName");
                picNode  = document.createElement('img');
                picNode.setAttribute("src", `${data.results[i].picture.medium}`);
                picNode.setAttribute("class", 'pics');
                nameNode = document.createTextNode(`${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}`);

                pInfoNode= document.createElement('p');
                pInfoNode.setAttribute("class", "userInfo");
                infoNode = document.createTextNode(`${data.results[i].phone} - ${data.results[i].location.country} ${data.results[i].email}`);

                divNode.appendChild(picNode);
                pNameNode.appendChild(nameNode);
                divNode.appendChild(pNameNode);
                pInfoNode.appendChild(infoNode);
                divNode.appendChild(pInfoNode);
                usersDiv.appendChild(divNode);
            } 
        })
}


