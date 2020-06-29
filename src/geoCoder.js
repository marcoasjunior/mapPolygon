const NodeGeocoder = require('node-geocoder');
 
const options = {

  provider: 'google',
  apiKey: 'AIzaSyA3-AByGaPeFXP0fr0qQQo0V1Pno9JKpXg', 
  formatter: null 

};
 
const geocoder = NodeGeocoder(options);

module.exports =  async function getGeo(address) {

    const res = await geocoder.geocode({

        address: address,
        country: 'Brazil'
    
    })

    return res


}


 
