import React from 'react';

type Props={
    status:{
        success:boolean, error:boolean
    }
}


function AlertComponent(props:Props) {
    const {status}=props
        const {success,error}=status
    return (
       <>
           {
               success && <div
                   className="absolute p-4 right-5 bottom-4  bg-green-500 text-white flex justify-center items-center"
               >Successfully Save</div>
           }
           {
               error && <div
                   className="absolute p-4 right-5 bottom-4  bg-red-500 text-white flex justify-center items-center"
               >Unable to Save</div>
           }
       </>
    );
}

export default AlertComponent;
