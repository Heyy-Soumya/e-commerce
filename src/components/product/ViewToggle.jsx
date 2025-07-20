import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setViewMode } from '../../features/products/productsSlice';
import { Squares2X2Icon, Bars3Icon } from '@heroicons/react/24/outline';

const ViewToggle = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector((s) => s.products.viewMode);

  return (
    <div className="flex items-center space-x-1 rounded-md border border-gray-300 p-1">
      <button
        onClick={() => dispatch(setViewMode('grid'))}
        className={`p-1 rounded ${
          viewMode === 'grid'
            ? 'bg-primary text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        title="Grid view"
      >
        <Squares2X2Icon className="h-5 w-5" />
      </button>
      <button
        onClick={() => dispatch(setViewMode('list'))}
        className={`p-1 rounded ${
          viewMode === 'list'
            ? 'bg-primary text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        title="List view"
      >
        <Bars3Icon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ViewToggle;