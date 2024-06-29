import React, { useTransition, useState } from "react";

const nameList = [
  "John",
  "Doe",
  "Jane",
  "Alice",
  "Bob",
  "Eve",
  "Carol",
  "David",
  "Frank",
  "Grace",
];

export default function UseTransitionComp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNames, setFilteredNames] = useState(nameList);

  const [isPending, startTransition] = useTransition();

  const handlerSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    startTransition(() => {
      setTimeout(() => {
        const filteredNames = nameList.filter((name) =>
            name.toLowerCase().includes(term)
          );
          setFilteredNames(filteredNames);
      }, 2000);
    });
  };

  return (
    <div>
      UseTransitionComp
      <label>Search: </label>
      <br />
      {isPending ? "Loading..." : null}
      <input
        type="text"
        value={searchTerm}
        onChange={handlerSearch}
        placeholder="Search..."
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
