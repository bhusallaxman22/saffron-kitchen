export function flattenMenu(categories) {
    let items = [];
    categories.forEach(category => {
        if (category.subcategories) {
            category.subcategories.forEach(subcat => {
                subcat.items.forEach(item => {
                    items.push({ ...item, category: category.category, subcategory: subcat.name });
                });
            });
        } else if (category.items) {
            category.items.forEach(item => {
                items.push({ ...item, category: category.category });
            });
        }
    });
    return items;
}
