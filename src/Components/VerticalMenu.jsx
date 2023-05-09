import React from 'react';
import './style.css';

const VerticalMenu = () => {
    const handleClick = (event) => {
        event.target.classList.toggle('active_btn');
      };
  return (
    <div class="menu">
        <div className="menu_item" >
            <span><button onClick={handleClick}>Menu 1</button></span>
        </div>
        <div className="menu_item" onClick={handleClick}>
            <span><button>Menu 2</button></span>
        </div>
        <div className="menu_item" onClick={handleClick}>
            <span><button>Menu 3</button></span>
        </div>
        <div className="menu_item" onClick={handleClick}>
            <span><button>Menu 4</button></span>
        </div>
        <div className="menu_item" onClick={handleClick}>
            <span><button>Menu 5</button></span>
        </div>
    </div>
  )
}

export default VerticalMenu
