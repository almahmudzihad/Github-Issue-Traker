

function activeRemove(id) {
   const allBtn = document.getElementById("allBtn");
   const openBtn = document.getElementById("openBtn");
   const closedBtn = document.getElementById("closedBtn");
    const allissue = document.getElementById('issueContainer');
   const openSection = document.getElementById('openIssues');
   const closeSection = document.getElementById('closedIssues')

   const issueCount = document.getElementById('issueCount');
   

   if (id === "allBtn") {
    allBtn.classList.add("bg-[#4a00ff]", "text-white");
    openBtn.classList.remove("bg-[#4a00ff]", "text-white");
    closedBtn.classList.remove("bg-[#4a00ff]", "text-white");
    allissue.classList.remove("hidden");
    openSection.classList.add("hidden");
    closeSection.classList.add("hidden");
        issueCount.textContent = allissue.children.length;
   } else if (id === "openBtn") {
    allBtn.classList.remove("bg-[#4a00ff]", "text-white");
    openBtn.classList.add("bg-[#4a00ff]", "text-white");
    closedBtn.classList.remove("bg-[#4a00ff]", "text-white");
    allissue.classList.add("hidden");
    openSection.classList.remove("hidden");
    closeSection.classList.add("hidden");
        issueCount.textContent = openSection.children.length;
   } else if (id === "closedBtn") {
    allBtn.classList.remove("bg-[#4a00ff]", "text-white");
    openBtn.classList.remove("bg-[#4a00ff]", "text-white");
    closedBtn.classList.add("bg-[#4a00ff]", "text-white");
    allissue.classList.add("hidden");
    openSection.classList.add("hidden");
    closeSection.classList.remove("hidden");
        issueCount.textContent = closeSection.children.length;
   }
};
const createElement = (arr) => {
    const htmlElement = arr.map(el => `<span class="bg-yellow-200 p-1 m-1 rounded-md"><i class="fa-solid fa-bug"></i> ${el}</span>`).join(' ');
    return htmlElement;
};

const issueLoad = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(response => response.json())
    .then(data => {
        displayIssues(data.data);
        displayOpenIssues(data.data);
        displayClosedIssues(data.data);
    })
    .catch(error => {
        console.error('Error fetching issues:', error);
    });
}
issueLoad();


const displayIssues = (data) => {
    const issueContainer = document.getElementById('issueContainer');
    issueContainer.innerHTML = '';
   data.forEach(issue => {
        const issueDiv = document.createElement('div');
        issueDiv.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'mb-4', 'space-y-2'); 
        if(issue.status === "open"){
            issueDiv.classList.add('border-t-4', 'border-green-500');
            
        } else if(issue.status === "closed"){
            issueDiv.classList.add('border-t-4', 'border-violet-500');
        }  
        issueDiv.innerHTML = `
            <div class="flex items-center justify-between">
                <img src="./assets/Open-Status.png" alt="${issue.author}" class="w-10 h-10 rounded-full mb-2">
                <p class="text-lg text-gray-500 mb-1 btn rounded-full bg-red-200">${issue.priority}</p>
            </div>
            <h3 class="text-lg font-semibold mb-2">${issue.title}</h3>
            <p class="text-gray-600 mb-2">${issue.description}</p>
            <span class="text-sm text-gray-500 mb-1 mr-1">${createElement(issue.labels)}</span>
            <div class=" mt-4">
                <p class="text-sm text-gray-500 mb-1">Author: ${issue.author}</p>
                <p class="text-sm text-gray-500 mb-1">${issue.updatedAt}</p>
            </div>

        `;
        issueContainer.appendChild(issueDiv);
   });
}   
const displayOpenIssues = (data) => {
    const issueContainer = document.getElementById('openIssues');
    issueContainer.innerHTML = '';
   data.forEach(issue => {
        const issueDiv = document.createElement('div');
        issueDiv.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'mb-4', 'space-y-2'); 
        if(issue.status === "open"){
            issueDiv.classList.add('border-t-4', 'border-green-500');
            issueDiv.innerHTML = `
            <div class="flex items-center justify-between">
                <img src="./assets/Open-Status.png" alt="${issue.author}" class="w-10 h-10 rounded-full mb-2">
                <p class="text-lg text-gray-500 mb-1 btn rounded-full bg-red-200">${issue.priority}</p>
            </div>
            <h3 class="text-lg font-semibold mb-2">${issue.title}</h3>
            <p class="text-gray-600 mb-2">${issue.description}</p>
            <span class="text-sm text-gray-500 mb-1 mr-1">${createElement(issue.labels)}</span>
            <div class=" mt-4">
                <p class="text-sm text-gray-500 mb-1">Author: ${issue.author}</p>
                <p class="text-sm text-gray-500 mb-1">${issue.updatedAt}</p>
            </div>

        `;
            issueContainer.appendChild(issueDiv);
        }   
        
        
   });

}
const displayClosedIssues = (data) => {
    const issueContainer = document.getElementById('closedIssues');
    issueContainer.innerHTML = '';
   data.forEach(issue => {
        const issueDiv = document.createElement('div');
        issueDiv.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'mb-4', 'space-y-2'); 
        if(issue.status === "closed"){
            issueDiv.classList.add('border-t-4', 'border-violet-500');
            issueDiv.innerHTML = `
            <div class="flex items-center justify-between">
                <img src="./assets/Open-Status.png" alt="${issue.author}" class="w-10 h-10 rounded-full mb-2">
                <p class="text-lg text-gray-500 mb-1 btn rounded-full bg-red-200">${issue.priority}</p>
            </div>
            <h3 class="text-lg font-semibold mb-2">${issue.title}</h3>
            <p class="text-gray-600 mb-2">${issue.description}</p>
            <span class="text-sm text-gray-500 mb-1 mr-1">${createElement(issue.labels)}</span>
            <div class=" mt-4">
                <p class="text-sm text-gray-500 mb-1">Author: ${issue.author}</p>
                <p class="text-sm text-gray-500 mb-1">${issue.updatedAt}</p>
            </div>

        `;
            issueContainer.appendChild(issueDiv);
        }   
        
        
   });

}