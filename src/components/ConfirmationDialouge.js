import React from "react";

const ConfirmationDialouge = ({ modalData, title,message, closeModal,successAction }) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
           {title}
          </h3>
          <p className="py-4">
            {message}
          </p>
          <div className="modal-action">
            <label htmlFor="confirmation-modal" onClick={()=>successAction(modalData)} className="btn btn-sm btn-error">
              Yes
            </label>
            <label onClick={closeModal}  className="btn btn-sm btn-success">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialouge;
