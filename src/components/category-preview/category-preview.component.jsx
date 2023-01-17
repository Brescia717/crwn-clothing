import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  CategoryPreviewGrid,
  CategoryPreviewTitleLink,
} from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitleLink to={title}>
          {title.toUpperCase()}
        </CategoryPreviewTitleLink>
      </h2>
      <CategoryPreviewGrid>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewGrid>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
