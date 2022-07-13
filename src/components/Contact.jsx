import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-full px-4 mb-3 mt-36 form-controlcontrol">
          <label className=" label"></label>
          <textarea
            className="w-full h-48 textarea textarea-bordered "
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center w-40 btn btn-outline">
          <button>Send</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
