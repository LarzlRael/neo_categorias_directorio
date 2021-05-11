import React, { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchContext';



const initialState = {
    all: true,
    golden: false,
    silver: false,
    bronze: false,
}

export const Search = () => {

    const { searchByTitle, searchByCategory } = useContext(SearchContext);


    const [query, setQuery] = useState({
        querySearch: ""
    });
    const [checkBoxs, setCheckBoxs] = useState(initialState);

    const { all, golden, silver, bronze } = checkBoxs;

    const { querySearch } = query;

    const handleSubmit = (e) => {
        e.preventDefault();
        searchByTitle(querySearch);
    }
    const onChange = ({ target }) => {


        setCheckBoxs({
            all: false,
            golden: false,
            silver: false,
            bronze: false,
        })

        setQuery({
            ...query,
            [target.name]: target.value
        })
    }

    const onChangeCheckBox = ({ target: { name, checked } }) => {

        setQuery({
            ...query,
            querySearch: ''
        })

        if (name === 'all') {

            searchByTitle("");

            setCheckBoxs(initialState);
            
        } else {
            setCheckBoxs({
                ...checkBoxs,
                all: false,
                [name]: checked
            })
        }

        
        searchByCategory(checkBoxs);




    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                <div className="form-group">
                    <input type="text"
                        className="form-control input-size"
                        placeholder="Search ..."
                        name="querySearch"
                        autoComplete="off"
                        onChange={onChange}
                        value={querySearch}
                    />
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            onChange={onChangeCheckBox}
                            name="all"
                            id="checkAll"
                            checked={all}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="checkAll">
                            Todos
                        </label>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            onChange={onChangeCheckBox}
                            name="golden"
                            checked={golden}
                            id="ckeckGolden" />

                        <label
                            className="form-check-label"
                            htmlFor="ckeckGolden">
                            Golden
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            checked={silver}
                            onChange={onChangeCheckBox}
                            name="silver"
                            id="checkSilver" />

                        <label
                            className="form-check-label"
                            htmlFor="checkSilver">
                            Silver
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            checked={bronze}
                            onChange={onChangeCheckBox}
                            name="bronze"
                            id="checkBronce" />

                        <label
                            className="form-check-label"
                            htmlFor="checkBronce">
                            Bronce
                        </label>
                    </div>

                </div>

            </div>
        </form>
    )
}



