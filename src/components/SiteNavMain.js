import React from 'react';
import { Menu } from 'antd';

const SiteNavMain = ({ handleCategoryClick }) => {
    const categories = [
        'Vegetables & Fruits',
        'Dairy & Breakfast',
        'Munchies',
        'Cold Drinks & Juices',
        'Instant & Frozen Food',
        'Tea, Coffee & Health Drinks',
        'Bakery & Biscuits',
        'Sweet Tooth',
        'Atta, Rice & Dal',
        'Dry Fruits, Masala & Oil',
        'Sauces & Spreads',
        'Chicken, Meat & Fish',
        'Paan Corner',
        'Organic & Premium',
        'Baby Care',
        'Pharma & Wellness',
        'Cleaning Essentials',
        'Home & Office',
        'Personal Care',
        'Ice Creams & Frozen Desserts',
        'Pet Care',
        'Beauty & Cosmetics',
        'Books',
        'Toys & Games',
        'Print Store',
        'See All..',
    ];

    const handleCategoryMenuClick = (index) => {
        handleCategoryClick(index);
    };

    // Define the number of columns for the grid
    const columns = 9;

    // Split categories into groups based on the number of columns
    const groupedCategories = [];
    for (let i = 0; i < categories.length; i += columns) {
        groupedCategories.push(categories.slice(i, i + columns));
    }

    return (
        <>
            <Menu mode="horizontal" style={{ display: 'grid', justifyContent: 'center', marginLeft: '5px', marginTop: '50px', width: '100%', textAlign: 'center', background: 'radial-gradient(#fff,lightbrown)', gap: '5px' }}>
                {groupedCategories.map((group, index) => (
                    <Menu.ItemGroup key={index} >
                        {group.map((category, catIndex) => (
                            <Menu.Item key={`${index}_${catIndex}`} onClick={() => handleCategoryMenuClick(index * columns + catIndex)} style={{ border: '1px black', marginLeft: '5px', }}>
                                {category}
                            </Menu.Item>
                        ))}
                    </Menu.ItemGroup>
                ))}

            </Menu>

        </>
    );
};

export default SiteNavMain;
