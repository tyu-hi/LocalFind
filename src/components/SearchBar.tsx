import * as React from "react";

class SearchBar extends React.Component {
  render() {
    return (
        <div className="bar">
          <input className="searchbar" placeholder="Find A Restaurant!" type="text" title="Search" />
        </div>
      
    );
  }
}

export default SearchBar;
