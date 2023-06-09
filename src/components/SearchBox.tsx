import React from "react";

interface Props {
    readonly value: string;
    readonly setSearchValue: (newValue: string) => void;
}

const SearchBox: React.FC<Props> = (props) => {
    return (
        <div className="col col-sm-4">
            <input
                className="form-control"
                value={props.value}
                onChange={(event)=> props.setSearchValue(event.target.value)}
                placeholder='Type to search...'
                ></input>
        </div>
    );
};

export default SearchBox;