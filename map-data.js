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


// Open the Modal
function openModal() {
    document.getElementById("mapModal").style.display = "block";
}

// Close the modal

function closeModal() {
    document.getElementById("mapModal").style.display = "none";
  }