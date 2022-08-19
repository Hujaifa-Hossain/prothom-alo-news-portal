import React from 'react';

const TabHead = ({index, setIndex}) => {
  return (
    <div>
      <span className={`tab-head ${index === 0 ? 'active' : null}`} onClick={() => setIndex(0)}>
            সর্বশেষ
          </span>
          <span className={`tab-head ${index === 1 ? 'active' : null}`} onClick={() => setIndex(1)}>
            পঠিত
          </span>
          <span className={`tab-head ${index === 2 ? 'active' : null}`} onClick={() => setIndex(2)}>
            আলোচিত
          </span>
    </div>
  );
};

export default TabHead;