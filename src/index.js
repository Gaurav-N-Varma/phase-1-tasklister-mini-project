document.addEventListener("DOMContentLoaded", () => {

  // Selecting the form element
  form = document.querySelector('form')

  // Adds a delete function to each li
  // <input type="submit" value="x">
    

  
  // listening for a submit event on the form element
  // when triggered, the value passed in should be appended to ul
  form.addEventListener('submit', (e) => {
    // console.log(e.target['new-task-description'].value);
    e.preventDefault()

    const bullet = document.createElement('li') 
    bullet.textContent = e.target['new-task-description'].value

    tasks = document.querySelector('#tasks')
    tasks.append(bullet)

    // Creating the x button for each bullet
    const xbutton = document.createElement('input')
    xbutton.type = 'submit'
    xbutton.value = 'x'
    xbutton.className = 'x'
    bullet.appendChild(xbutton)

    // Clicking the x button will delete the bullet
    xbutton.addEventListener('click', (e) => {
      e.target.parentElement.remove()
    })

    // Creating the drop down for each bullet
    const dropDown = document.createElement('select')

    // Creating options for each drop down: red for high priority, yellow for medium, green for low
    const defaultOption = document.createElement('option')
    const green = document.createElement('option')
    const yellow = document.createElement('option')
    const red = document.createElement('option')

    green.value = 'low priority'
    yellow.value = 'medium priority'
    red.value = 'high priority'

    defaultOption.textContent = 'select an option'
    green.textContent = 'low priority'
    yellow.textContent = 'medium priority'
    red.textContent = 'high priority'

    // Appending the options to each dropDown, then appending the dropDown to the bullet
    dropDown.append(defaultOption, green, yellow, red)
    
    bullet.appendChild(dropDown)

    // Changing color of bullet depending on option selected
    dropDown.addEventListener('change', (e) => {
      if(e.target.value === 'low priority'){
        e.target.parentElement.style.background = 'green'
      } else if(e.target.value === 'medium priority'){
        e.target.parentElement.style.background = 'yellow'
      } else {
        e.target.parentElement.style.background = 'red'
      }
    })
  })
});
