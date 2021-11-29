let map_state = [
    {
      device_code: "STX-RBT-1712-0145",
      icon: 'triangle.png',
      coordinate: {
      x: 320,
      y: 120	
       },
       pest_found: [
      {
        pest_name: 'ant',
            count: 3
           },
           {
        pest_name: 'mosquito',
            count: 1
           }
       ]
    } 
  ]

// helper function for setting multiple attributes at once on an element
function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// Open the Modal
function openModal() {
    document.getElementById("mapModal").style.display = "block";
    
}


// Close the modal
function closeModal() {
    document.getElementById("mapModal").style.display = "none";
}

// Load map data
function mapLoad(){
  // Get the map area to be drawn to
  let drawMap = document.getElementById('drawMap');

  // create the svg element to be added
  let mapElement = document.createElementNS('http://www.w3.org/2000/svg','circle');

  // use helper function to set attributes of created svg element from data passed
  setAttributes(mapElement, {'cx': map_state[0].coordinate.x, 'cy': map_state[0].coordinate.y, 'data-bs-toggle':'tooltip', 'data-bs-placement':'bottom', 'title':map_state[0].pest_found[0].pest_name});

  // add the element to the map area on the DOM
  drawMap.appendChild(mapElement);

}