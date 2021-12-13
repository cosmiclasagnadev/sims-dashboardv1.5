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
  
let mapAreas = {
  'map1': ['Area A', 'Area B', 'Area C'],
  'map2': ['Area D', 'Area E', 'Area F']
}

let mapPicData = {
  'Area A': 'html/assets/images/map1areaA.png',
  'Area B': 'html/assets/images/map1areaB.png',
  'Area C': 'html/assets/images/map1areaC.png',
  'Area D': 'html/assets/images/map2areaD.png',
  'Area E': 'html/assets/images/map2areaE.png',
  'Area F': 'html/assets/images/map2areaF.png',
}


let currentMap = "", currentArea = "";

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
  setAttributes(mapElement, {'cx': map_state[0].coordinate.x, 'cy': map_state[0].coordinate.y});

  // add the element to the map area on the DOM
  drawMap.appendChild(mapElement);

}

function changeDropdownValue(value) {
  let stringValue = ''
  
  if (value === 'map1') stringValue = 'Map 1'
  else if (value === 'map2') stringValue = 'Map 2'
  else if (value === 'map3') stringValue = 'Map 3'

  currentMap = stringValue
  document.getElementById('dropDownBtn').innerText = stringValue;

  let areas = '';
  for (area in mapAreas[value]) {
    areas += `<li><a class='dropdown-item' href='#' onClick='changeAreaDropdownValue("${mapAreas[value][area]}")'>` + mapAreas[value][area] + "</a></li>";
  }
  document.getElementById("areaDropdown").innerHTML = areas;
  document.getElementById('areaDropDownBtn').innerText = "Area";
  console.log(currentMap)
}

function changeAreaDropdownValue(value) {
  currentArea = value;
  document.getElementById('areaDropDownBtn').innerText = value;
  document.getElementById('dashboardMapPic').src = mapPicData[currentArea]
  document.getElementById("modalMapPic").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', mapPicData[currentArea]);
  console.log(currentArea)
} 