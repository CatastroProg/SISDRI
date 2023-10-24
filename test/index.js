
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0 -17.400849, -66.036436
 */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: { lat: -17.400849, lng: -66.036436 },
    });
    const ctaLayer = new google.maps.KmlLayer({
      url: "https://github.com/CatastroProg/SISDRI/blob/main/doc/poligone.kml",
      map: map,
    });
  }
  
  window.initMap = initMap;
  