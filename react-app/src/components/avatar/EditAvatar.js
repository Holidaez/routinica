import { skin, size, broadShirts, slimShirts, extraOptions, hairOptions, categoryIcons, hairColor, hairColors, bodySubs, glasses, wheelchairs, accent, backgrounds  } from './renderAvatars'
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


    const [avatarBody, setAvatarBody] = useState(avatar.body)
    const [avatarSkin, setAvatarSkin] = useState(avatar.skin)
    const [avatarBangs, setAvatarBangs] = useState(avatar.bangs)
    const [avatarStyle, setAvatarStyle] = useState(avatar.style)
    const [avatarFacial, setAvatarFacial] = useState(avatar.facial)
    const [avatarGlasses, setAvatarGlasses] = useState(avatar.glasses)
    const [avatarWheelchair, setAvatarWheelchair] = useState(avatar.wheelchair)
    const [avatarAccent, setAvatarAccent] = useState(avatar.accent)
    const [avatarAnimalEars, setAvatarAnimalEars] = useState(avatar.animal_ears)
    const [avatarAnimalTails, setAvatarAnimalTails] = useState(avatar.animal_tails)
    const [avatarHeadband, setAvatarHeadband] = useState(avatar.headband)
    const [avatarBackground, setAvatarBackground] = useState(avatar.background)


    const currentAvatar = {
      body:avatarBody || avatar.body,
      skin:avatarSkin || avatar.skin,
      bangs:avatarBangs || avatar.bangs,
      style:avatarStyle || avatar.style,
      facial:avatarFacial || avatar.facial,
      glasses:avatarGlasses || avatar.glasses,
      wheelchair:avatarWheelchair || avatar.wheelchair,
      accent:avatarAccent || avatar.accent,
      animal_ears:avatarAnimalEars || avatar.animal_ears,
      animal_tails:avatarAnimalTails || avatar.animal_tails,
      headband:avatarHeadband || avatar.headband,
      background:avatarBackground ||avatar.background
    }
    console.log(currentAvatar)




    const setShirt = (e) =>{
      e.preventDefault()
      setAvatarBody(e.target.id)
    }
    const selectSkin = (e) => {
      e.preventDefault()
      setAvatarSkin(e.target.id)
    }

    const selectBackground = (e) => {
      e.preventDefault()
      setAvatarBackground(e.target.id)
    }

    useEffect(()=> {
        dispatch(getAvatar())
    },[])

    const setSkinCategory =  () => {
      setActiveMainCategory("skin")
      setActiveSubCategory("Skin")
      console.log(activeMainCategory)
    }
    const setBodyCategory = () => {
      setActiveMainCategory("body")
      setActiveSubCategory("Size")
      console.log(activeMainCategory)
    }
    const setHairCategory =  () => {
      setActiveMainCategory("hair")
      setActiveSubCategory("Color")
      console.log(activeMainCategory)
    }
    const setExtraCategory = () => {
      setActiveMainCategory("extra")
      setActiveSubCategory("Glasses")
      console.log(activeMainCategory)
    }
    const setBackgroundCategory =  () => {
       setActiveMainCategory("background")
      setActiveSubCategory("Background")
      console.log(activeMainCategory)
    }
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
            <img src="/avatar/body/body.svg"></img>
            <p style={{ color: "#6133b4"}} className="cat-names">Body</p>
          </button>) || (<button className="cat-div" onClick={setBodyCategory}>
            <img src="/avatar/body/body.svg"></img>
            <p style={{ color: "#a4a1ac" }} className="cat-names">Body</p>
          </button>)}



          {activeMainCategory === "skin" && (<button className="cat-div">
            <img src="/avatar/skin/skin_purple.svg"></img>
            <p style={{ color: "#6133b4" }} className="cat-names">Skin</p>
          </button>) || (<button className="cat-div" onClick={setSkinCategory}>
            <img src="/avatar/skin/skin.svg"></img>
            <p style={{ color: "#a4a1ac" }} className="cat-names">Skin</p>
          </button>)}



          {activeMainCategory === "hair" && (<button className="cat-div">
            <img src="/avatar/hair/body_purple.svg"></img>
            <p style={{ color: "#6133b4" }} className="cat-names">Hair</p>
          </button>) || (<button className="cat-div" onClick={setHairCategory}>
            <img src="/avatar/hair/hair.svg"></img>
            <p style={{ color: "#a4a1ac" }} className="cat-names">Hair</p>
          </button>)}



          {activeMainCategory === "extra" && (<button className="cat-div">
            <img src="/avatar/body/body_purple.svg"></img>
            <p style={{ color: "#6133b4" }} className="cat-names">Extra</p>
          </button>) || (<button className="cat-div" onClick={setExtraCategory}>
            <img src="/avatar/extra/extra.svg"></img>
            <p style={{ color: "#a4a1ac" }} className="cat-names">Extra</p>
          </button>)}



          {activeMainCategory === "background" && (<button className="cat-div">
            <img src="/avatar/body/body_purple.svg"></img>
            <p style={{ color: "#6133b4" }} className="cat-names">Backgrounds</p>
          </button>) || (<button className="cat-div" onClick={setBackgroundCategory}>
            <img src="/avatar/backgrounds/backgrounds.svg"></img>
            <p style={{ color: "#a4a1ac" }} className="cat-names">Backgrounds</p>
          </button>)}


        </div>

        <div id="lower-portion">
          <div id="subcategory">
            {activeMainCategory === 'body' && bodySubs.map(cat => (
              activeSubCategory === cat && <button key={cat} id={cat} className="main-options-selected">{cat}</button> || <button key={cat} id={cat} className="main-options" onClick={(e) => selectSub(e)}>{cat}</button>
              ))}
            {activeMainCategory === 'skin' && (<button key='Color' id='Color' className="main-options-selected">Color</button> || <button key='Color' id='Color' className="main-options" onClick={(e) => selectSub(e)}>Color</button>)}
            {activeMainCategory === 'hair' && hairOptions.map(cat => (
              activeSubCategory === cat && <button key={cat} id={cat} className="main-options-selected">{cat}</button> || <button key={cat} id={cat} className="main-options" onClick={(e) => selectSub(e)}>{cat}</button>
              ))}
            {activeMainCategory === 'extra' && extraOptions.map(cat => (
              activeSubCategory === cat && <button key={cat} id={cat} className="main-options-selected">{cat}</button> || <button key={cat} id={cat} className="main-options" onClick={(e) => selectSub(e)}>{cat}</button>
              ))}
            {activeMainCategory === 'background' && (<button key='Background' id='Background' className="main-options-selected">Plain Background Set</button> || <button key='Background' id='Background' className="main-options" onClick={(e) => selectSub(e)}>Color</button>)}
          </div>
          <div id="options-div">
            {activeSubCategory === 'Skin' && skin.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectSkin(e)}><img className="thumbnails" src={image} id={image}></img></button>))}

            {activeSubCategory === 'Size' && size.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectSize(e)}><img className="thumbnails" id={image} src={image}></img></button>))}

            {activeSubCategory === 'Shirt' && shirtSize === 'broad' && broadShirts.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => setShirt(e)}><img className="thumbnails" src={image} id={image}></img></button>))}

            {activeSubCategory === 'Shirt' && shirtSize === 'slim' && slimShirts.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => setShirt(e)}><img className="thumbnails" src={image} id={image}></img></button>))}

            {activeSubCategory === 'Background' && backgrounds.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectBackground(e)}><img className="thumbnails" id={image} src={image}></img></button>))}
            {activeSubCategory === 'hairColor' && hairColor.map(image => (<img src={image}></img>))}
            {activeSubCategory === 'black-hair' && hairColors.black.bangs.map(image => (<button><img src={image}></img></button>))}
            {activeSubCategory === 'black-style' && hairColors.black.style.map(image => (<button><img src={image}></img></button>))}
            {activeSubCategory === 'black-facial' && hairColors.black.facial.map(image => (<button><img src={image}></img></button>))}
          </div>
        {/* <div style={}></div> */}
        </div>
      </>
    );

}

export default EditAvatar;
