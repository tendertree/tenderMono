import React from 'react';
import { Badge } from '../base/badge';

export enum ProductStatus {
  SALE = 'sale',
  SOLD_OUT = 'sold out',
  PICK = 'pick',
  NONE = 'none'
}

interface ProductBadgeProps {
  status: ProductStatus;
}

export function ProductBadge({ status }: ProductBadgeProps) {
  const badgeStyles = {
    [ProductStatus.SALE]: 'bg-red text-white',
    [ProductStatus.SOLD_OUT]: 'bg-dark text-white',
    [ProductStatus.PICK]: 'bg-strong text-gray-800',
    [ProductStatus.NONE]: 'hidden'
  };

  const badgeText = {
    [ProductStatus.SALE]: 'SALE',
    [ProductStatus.SOLD_OUT]: 'SOLD OUT',
    [ProductStatus.PICK]: 'PICK',
    [ProductStatus.NONE]: ''
  };

  return (
    <Badge 
      className={`w-20 justify-center ${badgeStyles[status]}`}
    >
      {badgeText[status]}
    </Badge>
  );
}


