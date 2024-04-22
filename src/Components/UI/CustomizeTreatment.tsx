"use client"
import React, { useEffect, useState } from "react";
import ProceedButton from "./ProceedButton";
import { CategoryService } from "@/Services/CategoryService";
import Categories from "./Categories";
import CategoryList from "./CategoryList";
import { config } from "@/libs/config";

const defaultCategoryKey = 'service-lhr-most-popular-female';
const categoryMap = config.idealImage.categoryMap;

export default function CustomizeTreatment() {
    const [categoryKey, setCategoryKey] = useState(defaultCategoryKey);
    const [categoryData, setCategoryData] = useState({});
    const [items, setItems] = useState({});

    // Load default category data on page load
    useEffect(() => {
        fetchCategoryData();
    }, []);

    // Load category data on change of categoryKey
    useEffect(() => {
        fetchCategoryData();
    }, [categoryKey]);

    // Save added items to cart in localstorage
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
      }, [items]);

    // Helper function to call back api to fetch category data
    const fetchCategoryData = async () => {
        const result = await getCategoryData(categoryKey);
        setCategoryData(result.data);
    }

    // Function to handle checkbox click events
    const handleCheckClick = (event, name) => {
        const isChecked = event.target.checked;
        setItems((prevItems) => {
            if (isChecked) {
                return { ...prevItems, [name]: name };
            } else {
            const { [name]: removedItem, ...restItems } = prevItems;
                return restItems;
            }
        });
    }

    // Function to render checkbox elements
    const renderCheckboxRows = () => {
        return categoryData?.included?.map((e, index) => (
          <div className="checkbox-row" key={index}>
            <input
              type="checkbox"
              checked={items[e.attributes.name] !== undefined}
              onChange={(event) => handleCheckClick(event, e.attributes.name)}
            />
            <label>{e.attributes.name}</label>
          </div>
        ));
      };
    
    return (
      <React.Fragment>
        
        {/* Mobile View Implementation */}
        <div className="scrollable-box show-mobile-view">
            <div className="top-box">
                <div className="category-title">
                    {categoryMap[categoryKey].label}
                </div>
                <div className="checkbox-group">
                    {renderCheckboxRows()}
                </div>
            </div>
            <div className="below-box">
                <CategoryList categoryKey={categoryKey} categoryMap={categoryMap} setCategoryKey={setCategoryKey}/>
            </div>
            <ProceedButton label={'Cart'} className={'cart-btn customize-treatment-btn'} onClick={() => console.log('Proceed to Cart, Items are Added to Cart!')} />
        </div>

        {/* Desktop View Implementation */}
        <div className="desktop-box hide-mobile-view">
            <div className="left-portion">
                <div className="empty-portion"></div>
                <div className="below-box">
                    <CategoryList categoryKey={categoryKey} categoryMap={categoryMap} setCategoryKey={setCategoryKey}/>
                </div>
            </div>
            <div className="right-portion">
                <div className="top-box">
                    <div className="category-title">
                        {categoryMap[categoryKey].label}
                    </div>
                    <div className="checkbox-group">
                        {renderCheckboxRows()}
                    </div>
                </div>
                <ProceedButton label={'Cart'} className={'cart-btn customize-treatment-btn'} onClick={() => console.log('Proceed to Cart, Items are Added to Cart!')} />
            </div>
        </div>
        
        
      </React.Fragment>
    );
}

// Function to fetch category data based on the category key
const getCategoryData = async (categoryKey: string) => {
    try {
        const categoryService = CategoryService.getInstance();
        return await categoryService.getCategoryData(categoryKey);
    } catch (_e) {
        console.log(_e);
        throw new Error('Not found');
    }
}

    
