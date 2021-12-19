 let map_state = [
    {
      device_code: "STX-RBT-1712-0145",
      icon: 'CAT_TRAP',
      coordinate: {
      x: 390,
      y: -100	
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
    },
    {
      device_code: "2",
      icon: 'MC_TRAP',
      coordinate: {
      x: 190,
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
  // // Get the map area to be drawn to
  let drawMap = document.getElementById('drawMap');
  
  let mapElement = null;
  for (i in map_state) {
    mapElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    mapElement.setAttributeNS(null, 'transform', `translate(${map_state[i].coordinate.x}, ${map_state[i].coordinate.y})`);
    mapElement.innerHTML = getIcon(map_state[i].icon);
    drawMap.appendChild(mapElement);
  }
}

function getIcon(iconName) {
  switch (iconName) {
    case 'MC_TRAP':
      return '<path id="dp_path001" fill="none" fill-rule="evenodd" stroke="black" stroke-width="4" d="M 368.737,196.803 L 391.4,196.803 L 391.4,213.383 L 368.737,213.383 Z "/>'
      break;
    case 'CAT_TRAP':
      return '<path id="dp_path001" fill="none" fill-rule="evenodd" stroke="black" stroke-width="4" d="M 380.34,401.76 C 385.624,401.76 389.908,406.043 389.908,411.327 C 389.908,416.611 385.624,420.893 380.34,420.893 C 375.056,420.893 370.772,416.611 370.772,411.327 C 370.772,406.043 375.056,401.76 380.34,401.76 Z "/>'
      break;

    case 'BIRD_SCARE':
      return '<path id="dp_path001" transform="matrix(1,0,0,1,-368.731,-399.719)" fill="none" fill-rule="evenodd" stroke="black" stroke-width="4" d="M 380.34,401.76 C 385.624,401.76 389.908,406.043 389.908,411.327 C 389.908,416.611 385.624,420.893 380.34,420.893 C 375.056,420.893 370.772,416.611 370.772,411.327 C 370.772,406.043 375.056,401.76 380.34,401.76 Z "/>'
      break;
    case 'G_TRAP':
      return '<path id="dp_path001" transform="matrix(1,0,0,1,-365.845,-162.079)" fill="none" fill-rule="evenodd" stroke="black" stroke-width="4" d="M 379.16,166.019 L 388.973,182.671 L 369.347,182.671 Z "/>'
      break;
    case 'IL_TRAP':
      return '<path id="dp_path001" transform="matrix(1,0,0,1,-364.591,-261.056)" fill="none" fill-rule="evenodd" stroke="black" stroke-width="4" d="M 379.876,266.628 L 381.725,271.436 L 382.529,273.475 L 384.717,273.611 L 389.861,273.883 L 385.861,277.127 L 384.169,278.521 L 384.717,280.643 L 386.047,285.62 L 381.725,282.817 L 379.876,281.641 L 378.027,282.817 L 373.705,285.62 L 375.035,280.643 L 375.583,278.521 L 373.891,277.127 L 369.891,273.883 L 375.035,273.611 L 377.223,273.475 L 378.027,271.436 Z "/>'
      break;
    case 'MOS_TRAP':
      return '<path id="dp_path001" transform="matrix(1,0,0,1,-366.996,-444.748)" fill="none" fill-rule="evenodd" stroke="black" stroke-width="4" d="M 381.237,447.832 L 383.255,450.199 L 384.628,451.9 L 386.888,451.86 L 390.096,451.88 L 389.404,454.852 L 388.859,456.932 L 390.303,458.583 L 392.284,460.975 L 389.404,462.313 L 387.349,463.207 L 386.888,465.305 L 386.153,468.268 L 383.255,466.967 L 381.237,466 L 379.22,466.967 L 376.321,468.268 L 375.587,465.305 L 375.125,463.207 L 373.071,462.313 L 370.191,460.975 L 372.172,458.583 L 373.616,456.932 L 373.071,454.852 L 372.379,451.88 L 375.587,451.86 L 377.847,451.9 L 379.22,450.199 Z "/>'
      break;
    case 'PTF':
      return '<path id="dp_path001" transform="matrix(1,0,0,1,-364.232,-291.245)" fill="none" fill-rule="evenodd" stroke="black" stroke-width="4" d="M 371.221,293.245 L 385.652,293.245 L 389.513,309.368 L 366.848,309.368 Z "/>'
      break;
    case 'PTH':
      return '<path id="dp_path001" transform="matrix(1,0,0,1,-314.907,-322.095)" fill="none" fill-rule="evenodd" stroke="#ff0019" stroke-width="4" d="M 329.089,324.903 L 340.421,336.065 L 329.089,347.228 L 317.757,336.065 Z "/>'
      break;
    case 'RBS':
      return '<path id="dp_path001" transform="matrix(1,0,0,1,-318.797,-123.16)" fill="none" fill-rule="evenodd" stroke="#ff0019" stroke-width="4" d="M 331.931,125.627 L 342.708,133.397 L 338.592,145.972 L 325.269,145.972 L 321.153,133.397 Z "/>'
      break;
    case 'RC_TRAP':
      return '<path id="dp_path001" transform="matrix(1,0,0,1,-367.34,-226.316)" fill="none" fill-rule="evenodd" stroke="black" stroke-width="4" d="M 374.553,228.316 L 374.553,233.348 C 374.553,233.636 374.32,233.869 374.032,233.869 L 369.34,233.869 L 369.34,245.427 L 374.032,245.427 C 374.32,245.427 374.553,245.66 374.553,245.948 L 374.553,250.98 L 386.791,250.98 L 386.791,245.948 C 386.791,245.66 387.024,245.427 387.312,245.427 L 392.004,245.427 L 392.004,233.869 L 387.312,233.869 C 387.024,233.869 386.791,233.636 386.791,233.348 L 386.791,228.316 Z "/>'
      break;

    default:
      break;
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
  document.getElementById('dashboardMapPic').src = mapPicData[currentArea]
  document.getElementById("modalMapPic").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', mapPicData[currentArea]);
  console.log(currentArea)
} 