

document.addEventListener("DOMContentLoaded", fetchUserData);

async function fetchUserData(){
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);

        const users = await response.json();    

        dataContainer.innerHTML = '';
        const userList = documnet.createElement("ul");

        users.forEach((user)=> {

            const listItem = document.createElement("li");

            listItem.textcontent = user.name;
            
            userList.appendchild(listItem);
        })

        dataContainer.appendchild(userList);
    } 

    catch{
        
        dataContainer.innerHTML = '';

        dataContainer.textContent = 'Failed to load user data.';
    }
}