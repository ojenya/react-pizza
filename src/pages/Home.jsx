import React from 'react';
import { Card, Categories,SortPopUp} from '../components';

function Home({ items,onAddItemsToBusket }) {

    const [categories, setCategories] = React.useState(null);
    const [sort, setSort] = React.useState(0);

    const updateCat = (props) => {
        setCategories(props)
    }
    const updatePop = (props) => {
        setSort(props)
    }
    const checkCat = (obj) =>{
        if(categories !==null){
            if(categories===obj.category){
                return(<Card onClick={onAddItemsToBusket} key={obj.id} {...obj} />)
            }
            else {
                return null
            }
        }
        else {
            return <Card onClick={onAddItemsToBusket} key={obj.id} {...obj} />
        }
    }
    const sortBy = () =>{
        if (sort === 0){
            return items.sort((o1,o2)=>o2.rating - o1.rating).map(obj => checkCat(obj))
        }
        if (sort === 1){
            return items.sort((o1,o2)=>o1.price - o2.price).map(obj => checkCat(obj))
        }
        if (sort === 2){
            return items.sort((o1,o2)=>{
                if (o1.name > o2.name) {
                return 1;
              }
              if (o1.name < o2.name) {
                return -1;
              }
              return 0;
            }).map(obj => checkCat(obj))
        }
    
    }
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          updateCat = {updateCat}
        />
        <SortPopUp updatePop = {updatePop} items={['популярности', 'цене', 'алфавит']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {sortBy()}
    
        
      </div>
    </div>
  );
}

export default Home;