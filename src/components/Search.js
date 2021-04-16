import React, { useState, useRef, useEffect } from "react";

import Post from "./Post";
import axios from "axios";

import "./Search.css";

const Search = (props) => {
	const [keyword, setKeyword] = useState("");
	const [list, setList] = useState([]);
	const inputRef = useRef();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (keyword === inputRef.current.value) {
				let query = keyword.length === 0 ? "" : "?username=" + keyword;
				axios
					.get("https://jsonplaceholder.typicode.com/users" + query)
					.then((response) => {
						setList(response.data);
					});
			}
		}, 300);
		return () => {
			clearTimeout(timer);
		};
	}, [inputRef, keyword]);

	return (
		<div className="Search">
			<h1>Type a word to search a User</h1>
			<div>
				You can check out all the data information at{" "}
				<a
					target="_blank"
					rel="noreferrer"
					href="https://jsonplaceholder.typicode.com/users"
				>
					Jsonplace holder website.
				</a>
				<br />
				Available names: Antonette, Bret, Samantha, Karianne, Kamren,
				Leopoldo_Corkery, Elwyn.Skiles, Maxime_Nienow, Delphine, Moriah.Stanton
			</div>
			<br />
			<div>
				<input
					ref={inputRef}
					value={keyword}
					onChange={(event) => setKeyword(event.target.value)}
					style={{ marginTop: "8px", width: "300px" }}
				/>
			</div>
			<br />
			{list.map((item, index) => {
				return <Post item={item} key={index} />;
			})}
		</div>
	);
};

export default Search;
