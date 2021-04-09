const teamTemplate = team => {
    const templateManager = manager => {
        return ` 
    
        <div class="card">
        <header><header>
          <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <p class="card-text">${manager.getRole}</p>
            <p class="card-text">${manager.email}</p>
            <p class="card-text">${manager.id}</p>
            <p class="card-text">${manager.office}</p>
          </div>
        </div>
        `
    }

    //create inter and engineer

    // push everything in an html team array 

    // return the entire html file with your html team arrray
}