import * as React from "react";
import { connect } from "react-redux";
import { changeSeedAndFetch } from "./actions";

class SeedPicker extends React.Component {
  render() {
    return (
      <div className="field">
        <select
          className="ui dropdown fluid"
          onChange={this.handleSeedChange} // (1)
          value={this.props.seed}
        >
          <option value="default-seed">Default seed</option>
          <option value="one-seed">One seed</option>
          <option value="another-seed">Another seed</option>
        </select>
      </div>
    );
  }

  handleSeedChange = e => {
    this.props.changeSeedAndFetch(e.currentTarget.value);
  };
}

const mapStateToProps = state => {
  return {
    seed: state.seed
  };
};
const mapDispatchToProps = { changeSeedAndFetch };

export const SeedPickerContainer = connect(mapStateToProps, mapDispatchToProps)(
  SeedPicker
);
