// src/pages/CategoryPage.jsx

import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';

const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <h1>Categoría: {categoryId}</h1>
      <ProductList products={[]} /> {/* Pasar productos filtrados */}
    </div>
  );
};

export default CategoryPage;
