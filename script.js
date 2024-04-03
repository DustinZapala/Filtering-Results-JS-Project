function filterByCity(targetCity, listingCityArray) {
  let indices = [];
  
  for (let i = 0; i < listingCityArray.length; i++) {
    let currentCity = listingCityArray[i];
    if (currentCity.toLowerCase() === targetCity.toLowerCase()) {
      indices.push(i);
    }
  }

  return indices;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let indices = [];

  for (let i = 0; i < listingPriceArray.length; i++) {
    let currentPrice = listingPriceArray[i];
    if (currentPrice >= minPrice && currentPrice <= maxPrice) {
      indices.push(i);
    }
  }

  return indices;  
}


function filterByTypes(targetTypes, listingTypeArray) {
  let indices = [];

  for (let i = 0; i < listingTypeArray.length; i++) {
    let currentType = listingTypeArray[i];
    if (targetTypes.includes(currentType)) {
      indices.push(i);
    }
  }

  return indices;
}