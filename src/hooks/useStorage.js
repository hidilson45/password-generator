import AsyncStorage from "@react-native-async-storage/async-storage";


const useStorage = () => {
    //get saved
    const getItem = async (key) =>{
        try{
            const passwords = await AsyncStorage.getItem(key);
            return json.parse(passwords) || [];
        }catch(err){
            console.log(err.message)
            return [];
        }
    }

    //save item
    const saveItem = async (key, value) =>{
        try{
            let passwords = await getItem(key);

            passwords.push(value)
            await AsyncStorage.setItem(key,JSON.stringify(passwords))
            
        }catch(err){
            console.log(err.message)
            
        }
    }

    //delete item
    const deleteItem = async (key, item) =>{
        try{
            let passwords = await getItem(key);
            let myPass = passwords.filter( (pass) =>{
                return (pass !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPass))
            return myPass;
        }catch(err){console.log(err.message)}
    }


    return{
        getItem,
        saveItem,
        deleteItem
    }

}

export default useStorage;