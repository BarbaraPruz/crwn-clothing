import React from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collection.container'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
/*  Promise / fetch approach : will only run on component mount (db changes after component mounts are missed)   
    const url = 'https://firestore.googleapis.com/v1/projects/crwn-db-66f43/databases/(default)/documents/collections'
    fetch(url)
      .then(response => response.json())
      .then(collections => console.log("FETCH",collections)) */

/*  Moved to thunk
const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot( async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      this.props.updateCollections(collectionsMap)
      this.setState({loading:false})
    }) */
  }

  
  render() {
    const { match } = this.props
    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: ()=>dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);
