const teamTemplate = team => {
    const templateManager = manager => `
    <div class="card">
      <div class="card-header">
          <h2 class="card-title">${ manager.getName() }</h2>
          <h3 class="card-title">${ manager.getRole() }</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${ manager.getId() }</li>
              <li class="list-group-item">Email: <a href="mailto:jared@fakemail.com">${ manager.getEmail() }</a></li>
              <li class="list-group-item">Office number: ${ manager.getOffice() }</li>
          </ul>
      </div>
    </div>
    `

    const templateEngineer = engineer => `
    <div class="card">
      <div class="card-header">
          <h2 class="card-title">${ engineer.getName() }</h2>
          <h3 class="card-title">${ engineer.getRole() }</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${ engineer.getId() }</li>
              <li class="list-group-item">Email: <a href="mailto:jared@fakemail.com">${ engineer.getEmail() }</a></li>
              <li class="list-group-item">Github Username: ${ engineer.getGithub() }</li>
          </ul>
      </div>
    </div>
    `

  const templateIntern = intern => `
  <div class="card">
    <div class="card-header">
        <h2 class="card-title">${ intern.getName() }</h2>
        <h3 class="card-title">${ intern.getRole() }</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ intern.getId() }</li>
            <li class="list-group-item">Email: <a href="mailto:jared@fakemail.com">${ intern.getEmail() }</a></li>
            <li class="list-group-item">School: ${ intern.getSchool() }</li>
        </ul>
    </div>
  </div>
  `

  // push everything in an html team array 
  return team
    .map( member => {
      console.log( member );

      if ( member.getRole() === 'Manager' ) {
        return templateManager( member );
      } else if ( member.getRole() === 'Engineer' ) {
        return templateEngineer( member );
      } else if ( member.getRole() === 'Intern' ) {
        return templateIntern( member );
      }
    })
    .join( "" );
}

const createHTMLTemplate = ( team ) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                ${ teamTemplate( team ) }
            </div>
        </div>
    </div>
</body>
</html>
`

module.exports = createHTMLTemplate;
