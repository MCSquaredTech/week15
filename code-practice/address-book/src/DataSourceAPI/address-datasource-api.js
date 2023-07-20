const AddressDS = 'https://64b9684c79b7c9def6c0fedf.mockapi.io/customers'; 

class AddressDataSourceAPI { 


    getAddress = async () => { 
        
        try{ 
            const resp = await fetch(AddressDS/company); 
            return await resp.json();
        } catch(ex) { 
            alert('Fetch Request Failed', ex); 
        }

    }

    getAddressByID = async (addressId) => { 
        try{ 
            const resp = await fetch(AddressDS/comapany/addressId); 
            return await resp.json();
        } catch(ex) { 
            alert('Fetch Address Request Failed', ex); 
        }
    }

    putAddressByID = async (address) => {
        try{
            const resp = await fetch(`${AddressDS}/company/${address.id}`,
            { 
                method: "PUT", 
                headers: { "content-type": "application/json" },
                body: JSON.stringify(address)
            });
            return await resp.json(); 
        } catch(ex){ 
            alert('Put Address Request Failed', ex); 
        }
    }

    postAddress  = async (address) => { 
        try{
            const resp = await fetch(`${AddressDS}/company/${address}`, {
                method: "POST", 
                headers: { 
                    "content-type": "application/json"
                },
                body: JSON.stringify(address)
            });
            return await resp.json(); 
        } catch(ex){
            alert('Post Address Request Failed', ex); 
        }
    }

    deleteAddress = async (addressId) => { 
        try{

        } catch(ex){
            alert('Delet Address Request Failed', ex)
        }
    }


}

export const AddressDataSoureAPI = new AddressDataSourceAPI();