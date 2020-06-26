import React from 'react';

function SortCat({ items }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const sortRef = React.useRef();
  const activeLabel = items[activeItem];

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
      // console.log('outside');
    }
    // console.log(sortRef.current)


  };

  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);


  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);


}

export default SortCat;