import React, { useState, useContext} from 'react';
import UserContext from "../UserContext";
import { Link } from 'react-router-dom';
import Layout from '../component/Layout/Layout';
import './Boxes.css';

function Table() {
    const { tab, setTab } = useContext(UserContext);
    const [selectedBox, setSelectedBox] = useState(null);

    const handleBoxClick = (index) => {
        setSelectedBox(index + 1); // Index starts from 0, so we add 1 to show a human-readable number
        setTab(index + 1); // Update the context with the selected table number
    };

    const numBoxes = 32;
    const boxes = Array.from({ length: numBoxes }, (_, index) => (
        <div key={index} className="box" onClick={() => handleBoxClick(index)}>
           Table No. {index + 1}
        </div>
    ));

    return (
        <Layout>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type='number' 
                        value={tab || ''} 
                        onChange={(e) => setTab(Number(e.target.value))} 
                    />
                    <button type='submit'>
                        Enter
                    </button>
                </form>
                <Link to='/back'>
                    Add items to belonging table no.
                </Link>
                <div className="boxes-container">{boxes}</div>
                {selectedBox !== null && <div className="selected-box">Selected Box: {selectedBox}</div>}
            </div>
        </Layout>
    );
}

export default Table;
