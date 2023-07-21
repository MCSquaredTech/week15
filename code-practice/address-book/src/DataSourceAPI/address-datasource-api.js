const AddressDS = 'https://64b9730479b7c9def6c112b8.mockapi.io/customers/company'; 

class AddressDataSourceAPI { 


    getAddress = async () => { 
        
        try{ 
            const resp = await fetch(`${AddressDS}/`); 
            return await resp.json();
        } catch(ex) { 
            alert('The Fetch Address Request Failed', ex); 
        }

    }

    getAddressByID = async (addressId) => { 
        try{ 
            const resp = await fetch(`${AddressDS}/${addressId.id}`); 
            return await resp.json();
        } catch(ex) { 
            alert('The Fetch Address Request Failed', ex); 
        }
    }

    putAddressByID = async (addressId) => {
        try{
            const resp = await fetch(`${AddressDS}/${addressId.id}`,
            { 
                method: "PUT", 
                headers: { "content-type": "application/json" },
                body: JSON.stringify(addressId)
            });
            return await resp.json(); 
        } catch(ex){ 
            alert('The Put Address Request Failed', ex); 
        }
    }

    postAddress  = async (address) => { 
        try{
            const resp = await fetch(`${AddressDS}/company/${address.id}`, {
                method: "POST", 
                headers: { 
                    "content-type": "application/json"
                },
                body: JSON.stringify(address)
            });
            return await resp.json(); 
        } catch(ex){
            alert('The Post Address Request Failed', ex); 
        }
    }

    deleteAddress = async (addressId) => { 
        try{
            const resp = await fetch(`${AddressDS}/company/${addressId.id}`, {method: "DELETE"} );            

        } catch(ex){
            alert('The Delet Address Request Failed', ex)
        }
    }


}

export const AddressDataSoureAPI = new AddressDataSourceAPI();