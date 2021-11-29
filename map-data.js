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
  let drawMap = document.getElementById('drawMap');
  let mapElement = document.createElementNS('http://www.w3.org/2000/svg','circle');

  let svgElement = '<path id="dp_path001" cx="320" cy="120" r="20" fill="none" fill-rule="evenodd" stroke="black" stroke-width="4" d="M 380.34,401.76 C 385.624,401.76 389.908,406.043 389.908,411.327 C 389.908,416.611 385.624,420.893 380.34,420.893 C 375.056,420.893 370.772,416.611 370.772,411.327 C 370.772,406.043 375.056,401.76 380.34,401.76 Z "/>'
  let domElement = document.createElement('div');

  domElement.innerHTML = svgElement;


  setAttributes(mapElement, {'cx': map_state[0].coordinate.x, 'cy': map_state[0].coordinate.y, 'data-bs-toggle':'tooltip', 'data-bs-placement':'bottom', 'title':map_state[0].pest_found[0].pest_name});


  drawMap.appendChild(domElement.firstChild);

}