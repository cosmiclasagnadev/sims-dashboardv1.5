let map_state = [
  {
      "device_code": "STX-RBT-1712-0145",
      "icon": "BLACK_CAT_TRAP.svg",
      "coordinate": {
          "x": 673,
          "y": 105
      },
      "pest_found": [
          {
              "pest_name": "ant",
              "count": 3
          },
          {
              "pest_name": "mosquito",
              "count": 1
          }
      ]
  },
  {
      "device_code": "STX-RBT-1712-0145",
      "icon": "RED_IL_TRAP.svg",
      "coordinate": {
          "x": 104,
          "y": 274
      },
      "pest_found": [
          {
              "pest_name": "ant",
              "count": 1
          },
          {
              "pest_name": "mosquito",
              "count": 2
          }
      ]
  },
  {
      "device_code": "STX-RBT-1712-0145",
      "icon": "RED_IL_TRAP.svg",
      "coordinate": {
          "x": 210,
          "y": 251
      },
      "pest_found": [
          {
              "pest_name": "ant",
              "count": 1
          }
      ]
  },
  {
      "device_code": "STX-RBT-1712-0145",
      "icon": "BLACK_CAT_TRAP.svg",
      "coordinate": {
          "x": 538,
          "y": 137
      },
      "pest_found": [
          {
              "pest_name": "ant",
              "count": 3
          },
          {
              "pest_name": "mosquito",
              "count": 1
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
  // // Get the map area to be drawn to
  // let drawMap = document.getElementById('drawMap');
  let mapDiv = document.getElementById('mapDiv');
  
  let mapElement = null;
  let cx = null, cy = null;
  for (i in map_state) {
    mapElement = document.createElement('img');
    mapElement.setAttribute('src', `html/assets/svg/${map_state[i].icon}`);
    mapElement.setAttribute('class', 'newMapElement');
    cx = map_state[i].coordinate.x
    cy = map_state[i].coordinate.y

    mapElement.style.top = cy.toString().concat('px');
    mapElement.style.left = cx.toString().concat('px');
    console.log('X:' + cx);
    console.log('Y:' + cy);
    mapDiv.appendChild(mapElement);
  }
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
  document.getElementById('dashboardMapPic').src = mapPicData[currentArea];
  document.getElementById('modalMapPic').src = mapPicData[currentArea];
  console.log(currentArea)
} 