export const defaultPost = {
    image: null,
    title: '',
    description: '',
    category: '',
    brand: '',
    condition: 'new',
    price: 0,
    success: false,
    error: null,
    loading: false
};

export const defaultInputs = [
    {
        field: 'Title',
        type: 'text',
        db: 'title',
        placeholder: '(required)'
    },
    {
        field: 'Description',
        type: 'textarea',
        db: 'description',
        placeholder: 'Please describe your item'
    },
    {
        field: 'Category',
        type: 'text',
        db: 'category',
        placeholder: 'Choose one'
    },
    {
        field: 'Brand',
        type: 'text',
        db: 'brand',
        placeholder: '(not required)'
    },
    {
        field: 'Condition',
        type: 'text',
        db: 'condition',
        placeholder: ''
    },
    {
        field: 'Price',
        type: 'number',
        db: 'price',
        placeholder: 'must be greater than $0'
    }
];
