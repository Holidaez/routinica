import { skin, size, broadShirts, slimShirts, extraOptions, hairOptions, categoryIcons, hairColor, hairColors, bodySubs, glasses, wheelchairs, accent, backgrounds, animalEars, animalTails, headbands } from './renderAvatars'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatarReducer, { getAvatar } from '../../store/avatar';
import { useHistory, Redirect } from 'react-router-dom';
import  { changeAvatar } from '../../store/avatar'
import './EditAvatar.css'

const EditAvatar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const avatar = useSelector(state => state.avatar)
  const user = useSelector(state => state.session.user)
  useEffect(() => {
    dispatch(getAvatar(user))
  }, [])
  const [activeMainCategory, setActiveMainCategory] = useState('body');
  const [activeSubCategory, setActiveSubCategory] = useState('Size');
  const [shirtSize, setShirtSize] = useState('broad');
  const [selectedHairColor, setSelectedHairColor] = useState('black');

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
    body: avatarBody || avatar.body,
    skin: avatarSkin || avatar.skin,
    bangs: avatarBangs || avatar.bangs,
    style: avatarStyle || avatar.style,
    facial: avatarFacial || avatar.facial,
    glasses: avatarGlasses || avatar.glasses,
    wheelchair: avatarWheelchair || avatar.wheelchair,
    accent: avatarAccent || avatar.accent,
    animal_ears: avatarAnimalEars || avatar.animal_ears,
    animal_tails: avatarAnimalTails || avatar.animal_tails,
    headband: avatarHeadband || avatar.headband,
    background: avatarBackground || avatar.background,
    current_user_id: user.id
  }


  const submitAvatar = () => {
    const works = dispatch(changeAvatar(currentAvatar))
      history.push('/main')
  }

  const setShirt = (e) => {
    e.preventDefault()
    setAvatarBody(e.target.id)
  }
  const selectSkin = (e) => {
    e.preventDefault()
    setAvatarSkin(e.target.id)
  }
  const selectBangs = (e) => {
    e.preventDefault()
    setAvatarBangs(e.target.id)
  }
  const selectStyle = (e) => {
    e.preventDefault()
    setAvatarStyle(e.target.id)
  }
  const selectFacial = (e) => {
    e.preventDefault()
    setAvatarFacial(e.target.id)
  }
  const selectGlasses = (e) => {
    e.preventDefault()
    setAvatarGlasses(e.target.id)
  }
  const selectWheelchair = (e) => {
    e.preventDefault()
    setAvatarWheelchair(e.target.id)
  }
  const selectAccent = (e) => {
    e.preventDefault()
    setAvatarAccent(e.target.id)
  }
  const selectAnimalEars = (e) => {
    e.preventDefault()
    setAvatarAnimalEars(e.target.id)
  }
  const selectAnimalTails = (e) => {
    e.preventDefault()
    setAvatarAnimalTails(e.target.id)
  }
  const selectHeadband = (e) => {
    e.preventDefault()
    setAvatarHeadband(e.target.id)
  }
  const selectBackground = (e) => {
    e.preventDefault()
    setAvatarBackground(e.target.id)
  }

  const setSkinCategory = () => {
    setActiveMainCategory("skin")
    setActiveSubCategory("Skin")
  }

  const setBodyCategory = () => {
    setActiveMainCategory("body")
    setActiveSubCategory("Size")
  }

  const setHairCategory = () => {
    setActiveMainCategory("hair")
    setActiveSubCategory("Color")
  }

  const setExtraCategory = () => {
    setActiveMainCategory("extra")
    setActiveSubCategory("Glasses")
  }

  const setBackgroundCategory = () => {
    setActiveMainCategory("background")
    setActiveSubCategory("Background")
  }
  const selectHairColor = (e) => {
    e.preventDefault()
    const hairImg = e.target.id
    if (hairImg.includes('black')) {
      setSelectedHairColor('black')
    }
    if (hairImg.includes('red')) {
      setSelectedHairColor('red')
    }
    if (hairImg.includes('white')) {
      setSelectedHairColor('white')
    }
    if (hairImg.includes('brown')) {
      setSelectedHairColor('brown')
    }
    if (hairImg.includes('blond')) {
      setSelectedHairColor('blond')
    }
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

    switch (e.target.id) {
      case 'Size': {
        ;
      }

      case 'Shirt': {
        setActiveSubCategory(e.target.id)
      }

      case 'skinColor': {
        setActiveSubCategory(e.target.id)
          ;
      }

      case 'Color': {
        setActiveSubCategory(e.target.id)
          ;
      }

      case 'Bangs': {
        setActiveSubCategory(e.target.id)
          ;
      }

      case 'Style': {
        setActiveSubCategory(e.target.id)
          ;
      }

      case 'Facial': {
        setActiveSubCategory(e.target.id)
          ;
      }

      case 'Glasses': {
        setActiveSubCategory(e.target.id)
          ;
      }
      case 'Wheelchair': {
        setActiveSubCategory(e.target.id);
      }

      case 'Accent': {
        setActiveSubCategory(e.target.id);
      }
      case 'Animal_Ears': {
        setActiveSubCategory(e.target.id);
      }

      case 'Animal_Tails': {
        setActiveSubCategory(e.target.id);
      }

      case 'Headband': {
        setActiveSubCategory(e.target.id);
      }
    }
  }

  return (

    <div>
      <div id="edit-avatar-page-container">
        {/* <div id="submit-avatar"><button>Save Changes</button></div> */}
        <div id='avatar-container'>

          {currentAvatar.bangs === 'null' && (
            <img src={currentAvatar.bangs} id='null'></img>
          ) || currentAvatar.bangs != 'null' && (
            <img src={currentAvatar.bangs} id='bangs'></img>
          )}
          {currentAvatar.skin != 'null' && (
            <img src={currentAvatar.skin} id='skin'></img>
          )}

          {currentAvatar.body && (
            <img src={currentAvatar.body} id='body'></img>
          )}

          {currentAvatar.accent === 'null' && (
            <img src={currentAvatar.accent} id='null'></img>
          ) || currentAvatar.accent != 'null' && (
            <img src={currentAvatar.accent} id='accent'></img>
          )}

          {currentAvatar.style === 'null' && (
            <img src={currentAvatar.style} id='null'></img>
          ) || currentAvatar.style != 'null' && (
            <img src={currentAvatar.style} id='style'></img>
          )}

          {currentAvatar.facial === 'null' && (
            <img src={currentAvatar.facial} id='null'></img>
          ) || currentAvatar.facial != 'null' && (
            <img src={currentAvatar.facial} id='facial'></img>
          )}

          {currentAvatar.glasses === 'null' && (
            <img src={currentAvatar.glasses} id='null'></img>
          ) || currentAvatar.glasses != 'null' && (
            <img src={currentAvatar.glasses} id='glasses'></img>
          )}

          {currentAvatar.wheelchair === 'null' && (
            <img src={currentAvatar.wheelchair} id='null'></img>
          ) || currentAvatar.wheelchair != 'null' && (
            <img src={currentAvatar.wheelchair} id='wheelchair'></img>
          )}

          {currentAvatar.background && (
            <img src={currentAvatar.background} id='background'></img>
          )}

          {currentAvatar.animal_ears === 'null' && (
            <img src={currentAvatar.animal_ears} id='null'></img>
          ) || currentAvatar.animal_ears != 'null' && (
            <img src={currentAvatar.animal_ears} id='animal_ears'></img>
          )}

          {currentAvatar.animal_tails === 'null' && (
            <img src={currentAvatar.animal_tails} id='null'></img>
          ) || currentAvatar.animal_tails != 'null' && (
            <img src={currentAvatar.animal_tails} id='animal_tails'></img>
          )}

          {currentAvatar.headband === 'null' && (
            <img src={currentAvatar.headband} id='null'></img>
          ) || currentAvatar.headband != 'null' && (
            <img src={currentAvatar.headband} id='headband'></img>
          )}

        </div>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Varela+Round" />
        <div id="category-container">


          {activeMainCategory === "body" && (<button className="cat-div">
            <img src="/avatar/body/body.svg"></img>
            <p className="cat-names">Body</p>
          </button>) || (<button className="cat-div" onClick={setBodyCategory}>
            <img src="/avatar/body/body.svg"></img>
            <p className="cat-names">Body</p>
          </button>)}



          {activeMainCategory === "skin" && (<button className="cat-div">
            <img src="/avatar/skin/skin.svg"></img>
            <p className="cat-names">Skin</p>
          </button>) || (<button className="cat-div" onClick={setSkinCategory}>
            <img src="/avatar/skin/skin.svg"></img>
            <p className="cat-names">Skin</p>
          </button>)}



          {activeMainCategory === "hair" && (<button className="cat-div">
            <img src="/avatar/hair/hair.svg"></img>
            <p className="cat-names">Hair</p>
          </button>) || (<button className="cat-div" onClick={setHairCategory}>
            <img src="/avatar/hair/hair.svg"></img>
            <p className="cat-names">Hair</p>
          </button>)}


        <div>
          {activeMainCategory === "extra" && (<button className="cat-div">
            <img src="/avatar/extra/extra.svg"></img>
            <p className="cat-names">Extra</p>
          </button>) || (<button className="cat-div" onClick={setExtraCategory}>
            <img src="/avatar/extra/extra.svg"></img>
            <p className="cat-names">Extra</p>
          </button>)}
        </div>



          {activeMainCategory === "background" && (<button className="cat-div-background">
            <img src="/avatar/backgrounds/backgrounds.svg"></img>
            <p className="cat-names-background">Backgrounds</p>
          </button>) || (<button className="cat-div-background" onClick={setBackgroundCategory}>
            <img src="/avatar/backgrounds/backgrounds.svg"></img>
            <p className="cat-names-background">Backgrounds</p>
          </button>)}
        </div>
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
          {activeSubCategory === 'Skin' && (
            skin.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectSkin(e)}><img className="thumbnails" src={image} id={image}></img></button>)))
          }
          {activeSubCategory === 'Size' && size.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectSize(e)}><img className="thumbnails" id={image} src={image}></img></button>))}

          {activeSubCategory === 'Shirt' && shirtSize === 'broad' && broadShirts.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => setShirt(e)}><img className="thumbnails" src={image} id={image}></img></button>))}

          {activeSubCategory === 'Shirt' && shirtSize === 'slim' && slimShirts.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => setShirt(e)}><img className="thumbnails" src={image} id={image}></img></button>))}

          {activeSubCategory === 'Background' && backgrounds.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectBackground(e)}><img className="thumbnails" id={image} src={image}></img></button>))}

          {activeSubCategory === 'Color' && hairColor.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectHairColor(e)}><img className="thumbnails" id={image} src={image}></img></button>))}

          {activeSubCategory === 'Bangs' && selectedHairColor && hairColors[selectedHairColor].bangs.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectBangs(e)}><img className="thumbnails" id={image} src={image}></img></button>))}
          {activeSubCategory === 'Bangs' && (
            <button id="null" onClick={(e) => selectBangs(e)}>Remove Bangs</button>
          )}

          {activeSubCategory === 'Style' && selectedHairColor && hairColors[selectedHairColor].style.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectStyle(e)}><img className="thumbnails" id={image} src={image}></img></button>))}
          {activeSubCategory === 'Style' && (
            <button id="null" onClick={(e) => selectStyle(e)}>Remove Style</button>
          )}

          {activeSubCategory === 'Facial' && selectedHairColor && hairColors[selectedHairColor].facial.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectFacial(e)}><img className="thumbnails" id={image} src={image}></img></button>))}
          {activeSubCategory === 'Facial' && (
            <button id="null" onClick={(e) => selectFacial(e)}>Remove Facial</button>
          )}

          {activeSubCategory === 'Wheelchair' && (
            wheelchairs.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectWheelchair(e)}><img className="thumbnails" id={image} src={image}></img></button>))
          )}
          {activeSubCategory === 'Wheelchair' && (
            <button id="null" onClick={(e) => selectWheelchair(e)}>Remove Wheelchair</button>
          )}

          {activeSubCategory === 'Glasses' && (
            glasses.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectGlasses(e)}><img className="thumbnails" id={image} src={image}></img></button>))
          )}
          {activeSubCategory === 'Glasses' && (
            <button id="null" onClick={(e) => selectGlasses(e)}>Remove Glasses</button>
          )}

          {activeSubCategory === 'Accent' && (
            accent.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectAccent(e)}><img className="thumbnails" id={image} src={image}></img></button>))
          )}
          {activeSubCategory === 'Accent' && (
            <button id="null" onClick={(e) => selectAccent(e)}>Remove Accent</button>
          )}

          {activeSubCategory === 'Animal_Ears' && (
            animalEars.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectAnimalEars(e)}><img className="thumbnails" id={image} src={image}></img></button>))
          )}
          {activeSubCategory === 'Animal_Ears' && (
            <button id="null" onClick={(e) => selectAnimalEars(e)}>Remove Ears</button>
          )}

          {activeSubCategory === 'Animal_Tails' && (
            animalTails.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectAnimalTails(e)}><img className="thumbnails" id={image} src={image}></img></button>))
          )}
          {activeSubCategory === 'Animal_Tails' && (
            <button id="null" onClick={(e) => selectAnimalTails(e)}>Remove Tail</button>
          )}

          {activeSubCategory === 'Headband' && (
            headbands.map(image => (<button className="thumbnail-button" id={image} onClick={(e) => selectHeadband(e)}><img className="thumbnails" id={image} src={image}></img></button>))
          )}
          {activeSubCategory === 'Headband' && (
            <button id="null" onClick={(e) => selectHeadband(e)}>Remove Headband</button>
          )}

        </div>
      </div>
      <div id="submit-div">
      <button id="submit-avatar" onClick={submitAvatar}>Save Changes</button>
      </div>
      <div id='bottom-of-the-page'></div>
    </div>

  );

}

export default EditAvatar;
