import React , {useState,useCallback} from "react";
const useHttp=()=>{
    const [error , setError ] =useState(null);
    const [isLoading , setISLoading]=useState(false);
    const sendRequest = useCallback(async(requestConfig,applyData)=>{
      try{
        setISLoading(true);
        setError(null);
        const response = await fetch(requestConfig.url, {
            method:requestConfig.method ? requestConfig.method : 'GET',
            body:requestConfig.body?JSON.stringify(requestConfig.body ):null,
            headers: requestConfig.headers? requestConfig.headers :{},
                  },

        );
        if(!response.ok){
            throw new Error(" Have Error");
        }
        const data =  await response.json();
        applyData(data);
        setISLoading(false)
    }catch(err){
      setError(err || "Something Wrong !");
    }
    },[]);


    return(
            {sendRequest, error ,isLoading}
    );
}
export default useHttp;