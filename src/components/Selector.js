import React from "react";

export default function Selector({ title, categories, value, chose }) {
  return (
    <div className="category-selector">
      <p>{title}</p>
      <select value={value} onChange={e => chose(e.target.value)}>
        {categories.map((category, index) => (
          <option
            key={index}
            value={category.id}
            dangerouslySetInnerHTML={{ __html: category.name }}
          />
        ))}
      </select>
    </div>
  );
}
