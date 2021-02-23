import React, { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchContext';


export const Search = () => {

    const { searchByTitle } = useContext(SearchContext);


    const [query, setQuery] = useState({
        querySearch: ""
    });
    const [checkBoxs, setCheckBoxs] = useState({
        all: true,
        golden: false,
        silver: false,
        bronze: false,
    });

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

    const onChangeCheckBox = ({ target }) => {

        setQuery({
            ...query,
            querySearch: ''
        })


        setCheckBoxs({
            ...checkBoxs,
            [target.name]: target.checked
        })

        const find = "";
        
        if (target.name === 'all') {
            searchByTitle(find);
        } else {
            searchByTitle(target.name);
        }


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
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            onChange={onChangeCheckBox}
                            name="all"
                            id="checkAll"
                            checked={all}
                        />
                        <label
                            class="form-check-label"
                            for="checkAll">
                            Todos
                        </label>
                    </div>

                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            onChange={onChangeCheckBox}
                            name="golden"
                            checked={golden}
                            id="ckeckGolden" />

                        <label
                            class="form-check-label"
                            for="ckeckGolden">
                            Golden
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            checked={silver}
                            onChange={onChangeCheckBox}
                            name="silver"
                            id="checkSilver" />

                        <label
                            class="form-check-label"
                            for="checkSilver">
                            Silver
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            checked={bronze}
                            onChange={onChangeCheckBox}
                            name="bronze"
                            id="checkBronce" />

                        <label
                            class="form-check-label"
                            for="checkBronce">
                            Bronce
                        </label>
                    </div>

                </div>

            </div>
        </form>
    )
}



