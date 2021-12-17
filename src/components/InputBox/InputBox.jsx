import React, { useState, useEffect } from "react";
import SelectedFamily from "../SelectedFamily/SelectedFamily";
import "./inputbox.css";

function InputBox({ list }) {
  const [renderListState, setRenderListState] = useState(false);
  const [inputState, setInputState] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState([]);
  const [selectedFamily, setSelectedFamily] = useState({ family: '', parent: ''});
  const families = [];

  useEffect(() => {
    createArray();
  });

  const createArray = () => {
    list.forEach((family) => {
      let tempFamily = [];
      let tmpFamilyName = `${family.parent1.split(' ')[1]}-${family.parent2.split(' ')[1]}`;
      tempFamily.push(tmpFamilyName);
      tempFamily.push(family.parent1);
      tempFamily.push(family.parent2);
      families.push(tempFamily);
    })
  }

  const onTextChanged = (e) => {
    if (suggestions.length === 0) {
      setRenderListState(false)
    }
    if (e.target.value.length > 0) {
      setRenderListState(true);
    } else {
      setRenderListState(false);
    }
    let searchResult = handleSearch(e.target.value);
    setSuggestions(searchResult);
    setText(e.target.value);
  };

  const handleSearch = (searchInput = '') => {
    const filteredData = families.filter(value => {
      let tmp = value.join().replace(/,/g, ' ');
      const searchStr = searchInput.toLowerCase();
      const nameMatches = tmp.toLowerCase().includes(searchStr);
      return nameMatches;
    });
    return filteredData;
  }

  const selectedParent = (family, parent) => {
    setSuggestions([]);
    setSelectedFamily({
      family: family,
      parent: parent,
    });
    setText('');
    setRenderListState(false)
  };

  const renderList = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item, index) => (
          <>
          {/* <p key={index}>{item[0]}</p> */}
          <p key={index+1} className='inputbox-parent-item' onClick={() => selectedParent(item[0], item[1])}>{item[1]}</p>
          <p key={index+2} className='inputbox-parent-item' onClick={() => selectedParent(item[0], item[2])}>{item[2]}</p>
          </>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="inputbox-input">
        <input
          value={text}
          onChange={onTextChanged}
          type='text'
          placeholder='Sök'
          disabled={inputState}
        />
        {renderListState && (
          <div className='inputbox-result-wrapper'>{renderList()}</div>
        )}
      </div>
        <SelectedFamily
          payload={selectedFamily}
          setSelectedFamily={setSelectedFamily}
          setInputState={setInputState}
          inputState={inputState}
        />
    </>
  );
}

export default InputBox;
