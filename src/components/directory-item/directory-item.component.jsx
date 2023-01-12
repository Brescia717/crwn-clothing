import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemBody,
  DirectoryItemContainer,
  DirectoryItemImage,
  DirectoryItemHeader,
  DirectoryItemContent,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  const navigate = useNavigate();

  const directoryItemLinkHandler = () => navigate(`/shop/${title}`);

  return (
    <DirectoryItemContainer onClick={directoryItemLinkHandler}>
      <DirectoryItemImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <DirectoryItemHeader>{title}</DirectoryItemHeader>
        <DirectoryItemContent>Shop Now</DirectoryItemContent>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
