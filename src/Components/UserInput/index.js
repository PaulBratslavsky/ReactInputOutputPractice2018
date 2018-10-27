import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        padding: '0.5rem 1rem',
        fontSize: '1.8rem',
        textAlign: 'center',
        margin: '1rem',
    }
    return(
        <div className="user-input">
            <label style={inputStyle}>Enter Messege Here</label>
            <input style={inputStyle} type="text" value={props.output}  onChange={props.onChangeInput}/>
            <button style={inputStyle} onClick={props.onClickHandle}>Send</button>
        </div>
    );
}

export default UserInput;