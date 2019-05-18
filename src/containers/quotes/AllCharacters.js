import React, { PureComponent } from 'react';
import Characters from '../../components/characters/Characters';
import { getCharacters } from '../../components/services/rickAndMortyApi';
import Loading from '../../components/Loading';
export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    loading: true
  }

  fetchCharacters = () => {
    this.setState({ loading: true });
    getCharacters()
      .then(({ characters }) => this.setState({ characters, loading: false }));
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters, loading } = this.state;
    if(loading) return <Loading />;

    return <Characters characters={characters} />;
  }
}
