import { skin, size, broadShirts, slimShirts, categoryIcons, hairColor, hairColors, bodySubs, glasses, wheelchairs, accent, backgrounds  } from './renderAvatars'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatarReducer, { getAvatar } from '../../store/avatar';
import './EditAvatar.css'

const EditAvatar = () => {
    const dispatch = useDispatch()
    const avatar = useSelector(state => state.avatar)
    console.log(avatar)
    const [activeMainCategory, setActiveMainCategory] = useState('body');
    const [activeSubCategory, setActiveSubCategory] = useState('Size');
    const [shirtSize, setShirtSize] = useState('broad');
    const [selectedHairColor, setSelectedHairColor] = useState('black');
    // const [activeSubCategoryName, setActiveSubCategoryName] = useState('Body');
    const [activeSelection, setActiveSelection] = useState('/avatar/body/black/broad_shirt_black.png');
    const [renderThumbnails, setRenderThumbnails] = useState('broad');
    // function currentlySelected(active, )

    const currentAvatar = {
      body:avatar.body,
      skin:avatar.skin,
      bangs:avatar.bangs,
      style:avatar.style,
      facial:avatar.facial,
      glasses:avatar.glasses,
      wheelchair:avatar.wheelchair,
      accent:avatar.accent,
      animal_ears:avatar.animal_ears,
      animal_tails:avatar.animal_tails,
      headband:avatar.headband,
      background:avatar.background
    }

    console.log(currentAvatar.body)
    useEffect(()=> {
        dispatch(getAvatar())
    },[])



    function selectSize(e) {
      e.preventDefault();
      if (e.target.id === '/avatar/body/black/slim_shirt_black.png') {
        setShirtSize('slim');
      } else {
        setShirtSize('broad');
      }
    }


    function selectSub(e) {
      console.log('SELECT SUB', e.target.id)

      switch(e.target.id) {
        case 'Size': {
          ;
        }

        case 'Shirt': {
          console.log('WHAT WE ARE SETTING: ', e.target.id)
          setActiveSubCategory(e.target.id)
        }

        case 'skinColor': {
          ;
        }

        case 'hairColor': {
          ;
        }

        case 'Bangs': {
          ;
        }

        case 'Style': {
          ;
        }

        case 'Facial': {
          ;
        }

        case 'Glasses': {
          ;
        }
        case 'Wheelchair': {
          ;
        }

        case 'Accent': {
          ;
        }
        case 'Animal_Ears': {
          ;
        }

        case 'Animal_Tails': {
          ;
        }

        case 'Headband': {
          ;
        }

      }
    }
    return (
      <>
        <div id='avatar-container'>
          {currentAvatar.bangs && (
            <img src={currentAvatar.bangs} id='bangs'></img>
          )}

          {currentAvatar.skin && (
            <img src={currentAvatar.skin} id='skin'></img>
          )}

          {currentAvatar.body && (
            <img src={currentAvatar.body} id='body'></img>
          )}

          {currentAvatar.accent && (
            <img src={currentAvatar.accent} id='accent'></img>
          )}

          {currentAvatar.style && (
            <img src={currentAvatar.style} id='style'></img>
          )}

          {currentAvatar.facial && (
            <img src={currentAvatar.facial} id='facial'></img>
          )}

          {currentAvatar.glasses && (
            <img src={currentAvatar.glasses} id='glasses'></img>
          )}

          {currentAvatar.wheelchair && (
            <img src={currentAvatar.wheelchair} id='wheelchair'></img>
          )}

          {currentAvatar.background && (
            <img src={currentAvatar.background} id='background'></img>
          )}

          {currentAvatar.animal_ears && (
            <img src={currentAvatar.animal_ears} id='animal_ears'></img>
          )}

          {currentAvatar.animal_tails && (
            <img src={currentAvatar.animal_tails} id='animal_tails'></img>
          )}

          {currentAvatar.headband && (
            <img src={currentAvatar.headband} id='headband'></img>
          )}

        </div>
        {/* <img src="/avatar/backgrounds/background_blue.png" alt="hey now"></img> */}
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Varela+Round" />
        <div id="category-container">
          {activeMainCategory === "body" && (<button className="cat-div">
            <img src="/avatar/body/body_purple.svg"></img>
            <p style={{ color: "#6133b4"}} className="cat-names">Body</p>
          </button>) || (<button className="cat-div">
            <img src="/avatar/body/body.svg"></img>
            <p style={{ color: "#a4a1ac" }} className="cat-names">Body</p>
          </button>)}
          {activeMainCategory === "skin" && (<button className="cat-div">
            <img src="/avatar/skin/skin_purple.svg"></img>
            <p style={{ color: "#6133b4" }} className="cat-names">Skin</p>
          </button>) || (<button className="cat-div">
            <img src="/avatar/skin/skin.svg"></img>
            <p style={{ color: "#a4a1ac" }} className="cat-names">Skin</p>
          </button>)}
          {activeMainCategory === "hair" && (<button className="cat-div">
            <img src="/avatar/hair/body_purple.svg"></img>
            <p style={{ color: "#6133b4" }} className="cat-names">Hair</p>
          </button>) || (<button className="cat-div">
            <img src="/avatar/hair/hair.svg"></img>
            <p style={{ color: "#a4a1ac" }} className="cat-names">Hair</p>
          </button>)}
          {activeMainCategory === "extra" && (<button className="cat-div">
            <img src="/avatar/body/body_purple.svg"></img>
            <p style={{ color: "#6133b4" }} className="cat-names">Extra</p>
          </button>) || (<button className="cat-div">
            <img src="/avatar/extra/extra.svg"></img>
            <p style={{ color: "#a4a1ac" }} className="cat-names">Extra</p>
          </button>)}
          {activeMainCategory === "backgrounds" && (<button className="cat-div">
            <img src="/avatar/body/body_purple.svg"></img>
            <p style={{ color: "#6133b4" }} className="cat-names">Backgrounds</p>
          </button>) || (<button className="cat-div">
            <img src="/avatar/backgrounds/backgrounds.svg"></img>
            <p style={{ color: "#a4a1ac" }} className="cat-names">Backgrounds</p>
          </button>)}
        </div>
        <div id="lower-portion">
          <div id="subcategory">
            {activeMainCategory === 'body' && bodySubs.map(cat => (
              activeSubCategory === cat && <button key={cat} id={cat} className="main-options-selected">{cat}</button> || <button key={cat} id={cat} className="main-options" onClick={(e) => selectSub(e)}>{cat}</button>
              ))}
          </div>
          <div id="options-div">
            {activeSubCategory === 'Skin' && skin.map(image => (<button className="thumbnail-button"><img className="thumbnails" src={image}></img></button>))}
            {activeSubCategory === 'Size' && size.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectSize(e)}><img className="thumbnails" id={image} src={image}></img></button>))}
            {activeSubCategory === 'Shirt' && shirtSize === 'broad' && broadShirts.map(image => (<button className="thumbnail-button"><img className="thumbnails" src={image}></img></button>))}
            {activeSubCategory === 'Shirt' && shirtSize === 'slim' && slimShirts.map(image => (<img className="thumbnails" src={image}></img>))}
            {activeSubCategory === 'hairColor' && hairColor.map(image => (<img src={image}></img>))}
            {activeSubCategory === 'black-hair' && hairColors.black.bangs.map(image => (<img src={image}></img>))}
            {activeSubCategory === 'black-style' && hairColors.black.style.map(image => (<img src={image}></img>))}
            {activeSubCategory === 'black-facial' && hairColors.black.facial.map(image => (<img src={image}></img>))}
          </div>
        {/* <div style={}></div> */}
        </div>
      </>
    );

}

export default EditAvatar;
