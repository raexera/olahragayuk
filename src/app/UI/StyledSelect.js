import styled from "styled-components";
import "simple-line-icons/css/simple-line-icons.css";
import "animate.css";

const SelectWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  margin: auto;
  width: 330px;
  border-radius: 3px;
  font-size: 12px;
  box-shadow: 0px 1em 2em -1.5em rgba(0, 0, 0, 0.5);

  i.toggle {
    position: absolute;
    z-index: 4;
    right: 1.5em;
    top: 1.6em;
    color: #ccc;
  }

  .placeholder {
    position: relative;
    display: block;
    width: 100%;
    padding: 1.5em 2em;
    background: rgba(255, 255, 255, 1);
    cursor: pointer;
    color: #999;
  }

  select {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  select:focus ~ i.toggle.icon-arrow-down {
    display: none;
  }

  select:focus ~ i.toggle.icon-arrow-up {
    display: block;
  }

  select:not(:focus) ~ i.toggle.icon-arrow-up {
    display: none;
  }

  select:not(:focus) ~ i.toggle.icon-arrow-down {
    display: block;
  }

  .options {
    display: none;
    position: absolute;
    width: 100%;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    margin-top: 1px;
  }

  select:focus ~ .options {
    display: block;
  }

  .option {
    display: block;
    overflow: hidden;
    width: 100%;
    transition: all 1s ease-out;
  }

  .option .title {
    position: relative;
    display: block;
    width: 100%;
    padding: 1.5em 2em;
    transition: background 0.3s ease-out;
  }

  .option .title i.icon {
    padding-right: 8px;
    color: rgba(146, 168, 209, 1);
  }

  .option .title:hover {
    color: #fff;
    background: rgba(146, 168, 209, 0.5);
  }

  .option input:checked ~ .title {
    background: #fff;
    color: inherit;
  }

  .option input:disabled ~ .title {
    background: #f9f9f9 !important;
    color: #aaa;
    cursor: no-drop;
  }
`;

const StyledSelect = ({ sport, onChange }) => (
  <SelectWrapper>
    <i className="toggle icon icon-arrow-down"></i>
    <i className="toggle icon icon-arrow-up"></i>
    <span className="placeholder">Pilih Sport</span>
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="">Pilih Sport</option>
      {sport.map((sport) => (
        <option key={sport.sportid} value={sport.sportid}>
          {sport.sportname}
        </option>
      ))}
    </select>
    <div className="options">
      {sport.map((sport) => (
        <label className="option" key={sport.sportid}>
          <input type="radio" name="option" value={sport.sportid} />
          <span className="title animated fadeIn">
            <i className={`icon ${sport.iconClass}`}></i>
            {sport.sportname}
          </span>
        </label>
      ))}
    </div>
  </SelectWrapper>
);

export default StyledSelect;
