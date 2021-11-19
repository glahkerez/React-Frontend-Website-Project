import React from 'react';
import Header from '../partials/Header';
import Poptitle from '../partials/Poptitle';
import Footer from '../partials/Footer';
import SearchBar from '../components/SearchBar';
import Dizilist from '../components/Dizilist';
import Sırala from '../components/Sırala';
import { Navbar } from 'react-bootstrap';

class Dizisayfa extends React.Component {

  state = {
    entries: [
      {
        "id": 1,
        "title": "Lost Girl",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/109/2/1092-PosterArt-c79b7c95666d7792a3c60e4407962f81.jpg",
        "releaseYear": 2010
      },
      {
        "id": 2,
        "title": "Plonk",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/192/3/1923-PosterArt-f4aba43064f61d1668840c4d0df91565.jpg",
        "releaseYear": 2014
      },
      {
        "id": 3,
        "title": "Eye Candy",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/108/72/10872-PosterArt-25f67e1932dffe23acee016241ef2610.jpg",
        "releaseYear": 2015
      },
      {
        "id": 4,
        "title": "HAPPYish",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/119/98/11998-PosterArt-c937329b04129ead97d0503818b5e54a.jpg",
        "releaseYear": 2015
      },
      {
        "id": 5,
        "title": "Friends",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/198/3/1983-PosterArt-53b54be2659ca7905f56d67f6f3df803.jpg",
        "releaseYear": 1994
      },
      {
        "id": 6,
        "title": "Wolf Creek",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
        "releaseYear": 2016
      },
      {
        "id": 7,
        "title": "No Activity",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg",
        "releaseYear": 2015
      },
      {
        "id": 8,
        "title": "Billions",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/117/25/11725-PosterArt-deecf8dbd786dfa2d964413b0bf83726.jpg",
        "releaseYear": 2016
      },
      {
        "id": 9,
        "title": "Better Call Saul",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/175/7/1757-PosterArt-fc0e2a5b18d4a662717f3cbb1827871d.jpg",
        "releaseYear": 2015
      },
      {
        "id": 10,
        "title": "Younger",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/143/24/14324-PosterArt-a0168953a3b93681dbd60c7bcc50a0af.jpg",
        "releaseYear": 2015
      },
      {
        "id": 11,
        "title": "Ash vs Evil Dead",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/102/56/10256-PosterArt-1a57bf03033531becb18f2ad0c755f5a.jpg",
        "releaseYear": 2015
      },
      {
        "id": 12,
        "title": "Transparent",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/108/7/1087-PosterArt-d19ff1330226ba26e4eb1def7a465f99.jpg",
        "releaseYear": 2014
      },
      {
        "id": 13,
        "title": "Power",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/512/1/5121-PosterArt-8957df8b3f89afc2809d068a9bf7f667.jpg",
        "releaseYear": 2014
      },
      {
        "id": 14,
        "title": "UnREAL",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/939/3/9393-PosterArt-6e5b82950cfce05fef0a50ff7a69474a.jpg",
        "releaseYear": 2015
      },
      {
        "id": 15,
        "title": "The Last Ship",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/197/7/1977-PosterArt-a2d3a9bb0ba1e05d26b29aed143715ce.jpg",
        "releaseYear": 2014
      },
      {
        "id": 16,
        "title": "The Girlfriend Experience",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/128/54/12854-PosterArt-683f17d4770e2f0febab93cf251bb1ee.jpg",
        "releaseYear": 2016
      },
      {
        "id": 17,
        "title": "11.22.63",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/120/40/12040-PosterArt-2a08532d986336771ea5a70658b6a957.jpg",
        "releaseYear": 2016
      },
      {
        "id": 18,
        "title": "Roadies",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/132/42/13242-PosterArt-dfd9c3a0fa5db6e2e38b62e7fedcaf47.jpg",
        "releaseYear": 2016
      },
      {
        "id": 19,
        "title": "Sherlock: The Abominable Bride",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/115/93/11593-PosterArt-33274b61ab0cb0e19cb7bff35824efb9.jpg",
        "releaseYear": 2016
      },
      {
        "id": 20,
        "title": "iZombie",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/197/5/1975-PosterArt-5c0ac7935dfb577df222814c2fbc1edb.jpg",
        "releaseYear": 2015
      },
      {
        "id": 21,
        "title": "Containment",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/129/01/12901-PosterArt-b18cb05ecda13ea274c4e32a2d6ea427.jpg",
        "releaseYear": 2016
      },
      {
        "id": 22,
        "title": "Flesh and Bone",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/102/57/10257-PosterArt-5846b1f514837b29477d566df3f713d2.jpg",
        "releaseYear": 2015
      },
      {
        "id": 23,
        "title": "The Circus: Inside The Greatest Political Show On Earth",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/133/40/13340-PosterArt-f5edb5d566e3d5375d7caad82e7839f5.jpg",
        "releaseYear": 2016
      },
      {
        "id": 24,
        "title": "Community",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/109/3/1093-PosterArt-69b57818da7152ce84d22dc72513ae4e.jpg",
        "releaseYear": 2009
      },
      {
        "id": 25,
        "title": "Mozart in the Jungle",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/144/8/1448-PosterArt-0b4461ee688948ab6efa1ff2d22220df.jpg",
        "releaseYear": 2014
      },
      {
        "id": 26,
        "title": "Blunt Talk",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/127/71/12771-PosterArt-d79951a3a8662abf816e6446c2b725e0.jpg",
        "releaseYear": 2015
      },
      {
        "id": 27,
        "title": "Angie Tribeca ",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "imageURL": "https://streamcoimg-a.akamaihd.net/000/131/66/13166-PosterArt-d2a89999fa2d84015ba82a979e0ed796.jpg",
        "releaseYear": 2016
      }
    ],

    searchQuery: "",
    sort: ""
  }
  // Dizi Arama-Filtreleme
  searchSeries = (e) => {
    this.setState({ searchQuery: e.target.value })
  }
  // Dropdown İle Veri Üzerinde Sıralama İşlemi
  sorting = (e) => {
    const sorting = e.target.value;

    const sortRes = this.state.entries.sort((a, b) => {
      if (sorting === 'Newest') {
        return (b.releaseYear) - (a.releaseYear)
      }
      else if (sorting === 'Oldest') {
        return (a.releaseYear) - (b.releaseYear)
      }
      else {
        return a.id > b.id ? 1 : -1
      }
    })
    //Durum Güncelleme
    this.setState({
      sort: sorting,
      entries: sortRes
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
              searchEntriesProp={this.searchSeries}
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
          <Dizilist
            entries={filteredEntries}/>  
        </div>
        <Footer />
      </div>
    )
  }
}
export default Dizisayfa;