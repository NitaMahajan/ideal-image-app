import React from 'react';

type CheckboxItem = {
  name: string;
  checked: boolean;
};

type CategoryProps = {
  categoryKey: string;
  categoryMap: Record<string, { label: string }>;
  categoryData: { included?: CheckboxItem[] };
  items: Record<string, string>;
  setItems: React.Dispatch<React.SetStateAction<Record<string, string>>>;
};

const CategoryComponent: React.FC<CategoryProps> = ({
  categoryKey,
  categoryMap,
  categoryData,
  items,
  setItems,
}) => (
  <div className="top-box">
    <div className="category-title">{categoryMap[categoryKey].label}</div>
    <div className="checkbox-group">
      {categoryData?.included?.map((e, index) => (
        <div className="checkbox-row" key={index}>
          <input
            type="checkbox"
            checked={items[e.name] !== undefined}
            onChange={(event) => {
              const isChecked = event.target.checked;
              setItems((prevItems) => {
                if (isChecked) {
                  return { ...prevItems, [e.name]: e.name };
                } else {
                  const { [e.name]: removedItem, ...restItems } = prevItems;
                  return restItems;
                }
              });
            }}
          />
          <label>{e.name}</label>
        </div>
      ))}
    </div>
  </div>
);

export default CategoryComponent;
