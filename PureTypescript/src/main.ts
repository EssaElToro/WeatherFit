type Character = {
  id: number;
  name: string;
};

type characterApiResponse = {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null;
  };
  results: Character[];
};

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((results: characterApiResponse) => {
    console.log(results);

    // console.log(characterNameElement);
    for (var index in results) {
      const characterNameElement = document.createElement("p");
      console.log(results.results[+index]);
      characterNameElement.innerText = results.results[0].name;
      document.body.append(characterNameElement);
    }

    // characterNameElement.innerText = results.results[0].name;

    // document.body.append(characterNameElement);
  });

type episode = {
  id: number;
  name: string;
};

type episodeApiResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: episode[];
};

fetch("https://rickandmortyapi.com/api/episode")
  .then((res) => res.json())
  .then((results: episodeApiResponse) => {
    console.log(results);

    // const characterNameElement = document.createElement("p");

    // console.log(characterNameElement);
    for (var index in results) {
      const characterNameElement = document.createElement("p");
      console.log(results.results[+index]);
      characterNameElement.innerText = results.results[0].name;
      document.body.append(characterNameElement);
    }

    // characterNameElement.innerText = results.results[0].name;

    // document.body.append(characterNameElement);
  });
