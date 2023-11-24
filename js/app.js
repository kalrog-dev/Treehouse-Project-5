baguetteBox.run(`.gallery`);

const searchFilter = () => {
  let input = document.getElementById(`search`).value;
  input = input.toLowerCase();
  let links = document.querySelectorAll(`a`);
  let captions = [];

  for (let i = 0; i < links.length; i++) {
    captions[i] = links[i].getAttribute(`data-caption`);

    if (!captions[i].toLowerCase().includes(input)) {
      links[i].style.display=`none`;  
    }
    else {
      links[i].style.display=``;         
    }
  }
};