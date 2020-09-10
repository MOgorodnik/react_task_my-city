// import {rerenderTree} from '../render';
let rerenderTree = () => {
  // debugger;
  console.log('alert rerenderTree');
}

const state = {
  data: [
    {
      id: '01',
      imgURI: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/%D0%A2%D1%80%D1%96%D1%83%D0%BC%D1%84%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0_%D0%B0%D1%80%D0%BA%D0%B0.jpg/120px-%D0%A2%D1%80%D1%96%D1%83%D0%BC%D1%84%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0_%D0%B0%D1%80%D0%BA%D0%B0.jpg",
      imgAlt: "Arch of triumph",
      imgDescr: "STATE Arch of triumph",
    },
    {
      id: '02',
      imgURI: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Armenian_Bell_Tower.jpg/120px-Armenian_Bell_Tower.jpg",
      imgAlt: "Armenian Bell Tower",
      imgDescr: "STATE Armenian Bell Tower",
    },
    // {
      // id: '03',
    //   imgURI:
    //     "https://picsum.photos/id/437/200/300",
    //   imgAlt: "Armenian Bell Tower",
    //   imgDescr: "Armenian Bell Tower"
    // },
    {
      id: '04',
      imgURI: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/P1280268_%D0%A2%D1%80%D0%B0%D0%BF%D0%B5%D0%B7%D0%BD%D0%B0_%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80%D1%8F_%D0%B4%D0%BE%D0%BC%D1%96%D0%BD%D1%96%D0%BA%D0%B0%D0%BD%D1%86%D1%96%D0%B2.jpg/269px-P1280268_%D0%A2%D1%80%D0%B0%D0%BF%D0%B5%D0%B7%D0%BD%D0%B0_%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80%D1%8F_%D0%B4%D0%BE%D0%BC%D1%96%D0%BD%D1%96%D0%BA%D0%B0%D0%BD%D1%86%D1%96%D0%B2.jpg",
      imgAlt: "Dominican monastery",
      imgDescr: "STATE Dominican monastery",
    },
    {
      id: '05',
      imgURI: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kamianets-Podilskyi-church-before-castle.jpg/272px-Kamianets-Podilskyi-church-before-castle.jpg",
      imgAlt: "Church backyard near the castle",
      imgDescr: "STATE Church backyard near the castle",
    },
  ]
};

export let addCard = (formData) => {

  let newCard = {
    id: Math.floor(Math.random() * 100),
    login: formData.login,
    password: formData.password,
    email: formData.email,
    imgURI: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/300`,
    imgAlt: formData.imgDescr,
    imgDescr: formData.imgDescr,
  }
  state.data.unshift(newCard);
  rerenderTree(state);
}

export const subscribe = (observer) => {
  // debugger;
  rerenderTree = observer;
}

export default state;