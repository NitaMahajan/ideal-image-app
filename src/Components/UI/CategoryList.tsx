type CategoryListProps = {
    categoryKey: string;
    setCategoryKey: Function;
    categoryMap: any;
};

const CategoryList = ({ categoryKey, setCategoryKey, categoryMap }: CategoryListProps) => {
    return (
    <div className="container-list">
        {Object.keys(categoryMap).map((key, i) => (
            <button key={i} className={`sub-box ${categoryKey === key ? 'selected' : ''}`}
                onClick={() => setCategoryKey(key)}>{categoryMap[key].label}
            </button>))
        }
    </div>
    );
}

export default CategoryList;