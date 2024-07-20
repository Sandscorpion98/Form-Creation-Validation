

document.addEventListener("DOMContentLoaded", fetchUserData());

async function fetchUserData(){
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);

        const users = await response.json();    

        dataContainer.innerHTML = '';
        const userList = documnet.createElement("ul");

        users.forEach(()=> {

            const list = document.createElement("li");

            list.textcontent = users.name;
            
            userList.append("li");
        })

        dataContainer.append(userList);
    } 
    catch{
        
        dataContainer.innerHTML = '';

        dataContainer.textContent = 'Failed to load user data.';
    }
}