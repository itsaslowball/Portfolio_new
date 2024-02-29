import React from 'react';
import { Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const MyToast = () => {
        return (
          <Toast show={true} onClose={() => {}} style={{padding:'15px',fontSize:'20px', backgroundColor:'green'}}>
              <strong className="mr-auto">Message Sent</strong>
          </Toast>
        );
      };
      