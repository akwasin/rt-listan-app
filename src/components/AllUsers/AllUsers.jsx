import React, { } from "react";
import PropTypes from "prop-types";
import InputBox from '../InputBox/InputBox';
import SourceData from "../../data/Source.json";
import './allusers.css'

const familyList = [];
const parentList = [];

const renderFamily = () => {
    let list = [];  
    for (const [familyName, parents] of Object.entries(SourceData[0])) {
        let users = Object.keys(parents).map((key) => [parents[key]]);
        familyList.push(familyName);
        parentList.push(users.join(','));
        list.push(
            <li key={familyName} className='all-family'>
                {familyName}
                <div>{users.join(' & ')}</div>
            </li>
        )
    }
    return list;
}

function AllUsers() {
  return (
    <>
      <InputBox
        list={SourceData}
      />
    </>
  );
}

AllUsers.defaultProps = {
  description: "",
};

AllUsers.propTypes = {
  id: PropTypes.string,
};

export default AllUsers;