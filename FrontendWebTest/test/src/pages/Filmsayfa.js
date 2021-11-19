import React from 'react';
import Header from '../partials/Header';
import Poptitle from '../partials/Poptitle';
import Footer from '../partials/Footer';
import SearchBar from '../components/SearchBar';
import Filmlist from '../components/Filmlist';
import Sırala from '../components/Sırala';
import { Navbar} from 'react-bootstrap';

class Filmsayfa extends React.Component {

  state = {
    entries: [
      
      {
        "id": 1,
        "title": "Mad Max: Fury Road",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/958/725/958725-PosterArt-96c5bbb6e15269f5b5cd9bc7801de1d9.jpg",
        "releaseYear": 2015
      },
      {
        "id": 2,
        "title": "Frasier",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/120/27/12027-PosterArt-3f8c0625d76d30c9a583c647e4c29c67.jpg",
        "releaseYear": 1994
      },
      {
        "id": 3,
        "title": "The Hunger Games: Catching Fire",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/843/788/843788-PosterArt-b4e53eeb7e3e560a93c4033f3c791945.jpg",
        "releaseYear": 2013
      },
      {
        "id": 4,
        "title": "The Hunger Games: Mockingjay - Part 1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/376/199/376199-PosterArt-0929f0c32637703dc8ba857e81154bc9.jpg",
        "releaseYear": 2014
      },
      {
        "id": 5,
        "title": "The Hunger Games: Mockingjay - Part 2",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/109/8333/1098333-PosterArt-c72002fd42ec6f2cfc53004a59b432be.jpg",
        "releaseYear": 2015
      },
      {
        "id": 6,
        "title": "U2: Live in Paris",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/963/194/963194-PosterArt-9d1f4f28bb94e5e0f06e83d1216a8e30.jpg",
        "releaseYear": 2015
      },
      {
        "id": 7,
        "title": "Under The Gun",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/115/3873/1153873-PosterArt-93b3333a696042bf7da06b874af771d8.jpg",
        "releaseYear": 2016
      },
      {
        "id": 8,
        "title": "San Andreas",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/958/726/958726-PosterArt-46061b8e3d5b4c8fd690d045ee524d0f.jpg",
        "releaseYear": 2015
      },
      {
        "id": 9,
        "title": "Paper Planes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/376/206/376206-PosterArt-fc212c3beeab2c066977541a2312d732.jpg",
        "releaseYear": 2015
      },
      {
        "id": 10,
        "title": "John Wick",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/376/201/376201-PosterArt-4f91ac739ae5147a51ae3abc78d55f2d.jpg",
        "releaseYear": 2014
      },
      {
        "id": 11,
        "title": "Freakonomics",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/371/739/371739-PosterArt-ba6bb08bb67b565aaa35ba59e15bdf7d.jpg",
        "releaseYear": 2009
      },
      {
        "id": 12,
        "title": "Troll Hunter",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/393/966/393966-PosterArt-72da04b296c0796a20540205eaa4fce0.jpg",
        "releaseYear": 2011
      },
      {
        "id": 13,
        "title": "Spooks: The Greater Good",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/119/3835/1193835-PosterArt-faaba78b86d44c352d258d7189d485f6.jpg",
        "releaseYear": 2015
      },
      {
        "id": 14,
        "title": "Jenny's Wedding",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/103/5939/1035939-PosterArt-8513e9e2dcfc6845adbd6d1fdd1a5f5f.jpg",
        "releaseYear": 2014
      },
      {
        "id": 15,
        "title": "Life of Crime",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/118/0648/1180648-PosterArt-80d56bbb6635cff7a49ad2287711c378.jpg",
        "releaseYear": 2013
      },
      {
        "id": 16,
        "title": "Leon: The Professional",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/119/3838/1193838-PosterArt-7328f58d3e64953a540a3543a5cd5c39.jpg",
        "releaseYear": 1994
      },
      {
        "id": 17,
        "title": "A Lego Brickumentary",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/109/8345/1098345-PosterArt-f0f207e02947ca76d9f9b238aea54dc1.jpg",
        "releaseYear": 2015
      },
      {
        "id": 18,
        "title": "Just Friends",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/375/664/375664-PosterArt-d11924fb0752525039b1168197030753.jpg",
        "releaseYear": 2005
      },
      {
        "id": 19,
        "title": "Ernest & Celestine",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/928/838/928838-PosterArt-c3d8ac708b712062e519a3b106469595.jpg",
        "releaseYear": 2014
      },
      {
        "id": 20,
        "title": "Valiant",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/885/233/885233-PosterArt-e79ac1b3fbb5f8677094f5ae8adca301.jpg",
        "releaseYear": 2005
      },
      {
        "id": 21,
        "title": "The Voices",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/103/5938/1035938-PosterArt-4131ef088343f85d686806f2b80253c1.jpg",
        "releaseYear": 2013
      },
      {
        "id": 22,
        "title": "Sex and the City 2",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/328/010/092e34afe0648a42cf12beb2d7557a65.jpg",
        "releaseYear": 2009
      },
      {
        "id": 23,
        "title": "Nasty Baby",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/110/1174/1101174-PosterArt-c1fe5d416b9e410b8726893272e8711a.jpg",
        "releaseYear": 2015
      },
      {
        "id": 24,
        "title": "Tracers",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/958/724/958724-PosterArt-28f056d80c744f0ca9418250db9e4c61.jpg",
        "releaseYear": 2015
      },
      {
        "id": 25,
        "title": "I Am Legend",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/375/797/375797-PosterArt-f456379f7c61bcd9c8f9fc781f4bce28.jpg",
        "releaseYear": 2008
      },
      {
        "id": 26,
        "title": "How To Train Your Dragon",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/110/1196/1101196-PosterArt-c47d98ddca64ef18cf79c78d6ab8b3ad.jpg",
        "releaseYear": 2010
      }
    ],

    searchQuery: "",
    sort: ""
  }
  // Film Arama-Filtreleme
  searchMovie = (e) => {
    this.setState({ searchQuery: e.target.value })
  }
  // Dropdown İle Veri Üzerinde Sıralama İşlemi
  sorting = (e) => {
    const sorting =e.target.value;

    const sortRes = this.state.entries.sort((a,b) => {
      if(sorting === 'Newest') {
        return (b.releaseYear) - (a.releaseYear)
      }
      else if(sorting === 'Oldest') {
        return (a.releaseYear) - (b.releaseYear)
      }
      else {
        return a.id>b.id?1:-1
      }
    })
    //Durum Güncelleme
    this.setState({
      sort:sorting,
      entries:sortRes
    })
  }
  render() {
    //Aranan Terim Data İçerisindeyse Döndürür
    let filteredEntries = this.state.entries.filter(
      (entrie) => {
        return entrie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
    )    
    return (
      <div>
        <Header />
        <Poptitle />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Navbar>
              <SearchBar
              searchEntriesProp={this.searchMovie}
              />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                
                  <Sırala
                  sorting={this.sorting}
                  sorts={this.state.sort}
                  />
              </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <Filmlist
            entries={filteredEntries}/>  
        </div>
        <Footer />
      </div>
    )
  }
}
export default Filmsayfa;
