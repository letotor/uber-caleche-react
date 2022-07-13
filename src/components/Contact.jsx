import React from 'react'

const Contact = () => {
  return (
  <>
<div className="flex flex-col items-center justify-center ">
<div className="flex items-center justify-center mb-3 mt-36 form-control">
  <label className=" label">
  </label> 
  <textarea className="w-screen h-48 textarea textarea-bordered " placeholder="Enter your message"></textarea>
  
</div>
<div className="flex items-center justify-center w-40 btn btn-outline">
<button>Send</button>
</div>
</div>

  


    </>
  )
}

export default Contact