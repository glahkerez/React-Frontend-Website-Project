import React, { Component } from 'react'
import { Navbar, Container, Form,} from 'react-bootstrap';


class SearchBar extends Component {

  //Sayfanın Varoluşsal Davranışını Durdurma
  handleForSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    //Arama Kutusu
    return (
      <Navbar>
        <Container>
          <Form className="d-flex" onSubmit={this.handleForSubmit}>
            <input
              onChange={this.props.searchEntriesProp}
              type="text"
              placeholder="Film / Dizi / Oyuncu ara"
              className="form-control"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
    )
  }
}
/*<NavDropdown title="Sırala" id="collasible-nav-dropdown">
  <NavDropdown.Item href="#yeniyegöre">Yeniye Göre Sırala</NavDropdown.Item>
  <NavDropdown.Item href="#eskiyegöre">Eskiye Göre Sırala</NavDropdown.Item>
  <NavDropdown.Item href="#puanagöre">Puana Göre Sırala</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href="#rastgele">RastgeleSırala</NavDropdown.Item>
  </NavDropdown>*/
export default SearchBar;
