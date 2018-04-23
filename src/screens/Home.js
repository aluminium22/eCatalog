import React, { Component } from 'react';
import PropTypes from 'react';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/List/ListSubheader';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Grid from 'material-ui/Grid'
import classNames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import Topbar from '../components/Toolbar/Topbar';
import ItemsContainer from '../components/Container/ItemsContainer';
import ResponsiveDrawer from '../components/Drawer/ResponsiveDrawer';




const dataProducts = require('../data-test/itemsCall.json').products;
const dataCategory = require('../data-test/itemsCall.json').category;
const dataCriteria = require('../data-test/itemsCall.json').criteria;
const dataFacets = require('../data-test/itemsCall.json').facets;
const getKeyword = function(){}
const dataKeyword = require('../data-test/itemsCall.json').criteria;

const TEMP_ALLOWED_COMPARE_DESK = 4
const TEMP_ALLOWED_COMPARE_MOBILE = 2

console.log(dataProducts);
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    flexDirections: 'row',
  },
  card: {
    paddingTop:16,
  },
  cardContent: {
    height: 90,
    overflow: 'hidden',
    paddingLeft:8,
    paddingRight:8,
  },
  media: {
    height: 0,
    paddingTop: '80%',
  },
  gridRoot: {
    padding: 8,
    paddingTop: 44,
  },
  title: {
    minWidth:124,
    width: '25%',
  },
  badgeContainer: {
    flexDirection: 'column',
    padding:0,
    margin: 0,
    display: 'flex',
    marginTop: -16,
    position: 'absolute',

  },
  badgeListItem: {
    padding: 0,
    borderRadius: 5,
  },
  badgeListText: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
    fontWeight: 'bold',
    color: '#ffffff',
    borderRadius: 2,
    fontSize: 14,
  },
  '@media (min-width: 800px)': {
    itemsContainer: {
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    navColumn: {
      width: '20%',
      minWidth: 300,
      height: '100%',
      position: 'fixed',
      overflow: 'auto',
      backgroundColor: '#ffffff',
    },
    gridColumn: {
      width: '80%',
      marginLeft: 300,
    },
  },
  rating0: {
    backgroundImage: 'url(https://www.matcotools.com/ecatalog/preview2/img/review-sprite.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 18px',
    height:20,
    width: 90,
    backgroundPosition:'-90px 0px',
  },
  rating0h: {
    backgroundImage: 'url(https://www.matcotools.com/ecatalog/preview2/img/review-sprite.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 18px',
    height:20,
    width: 90,
    backgroundPosition:'-72px 0px',
  },
  rating1: {
    backgroundImage: 'url(https://www.matcotools.com/ecatalog/preview2/img/review-sprite.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 18px',
    height:20,
    width: 90,
    backgroundPosition:'-260px 0px',
  },
  rating1h: {
    backgroundImage: 'url(https://www.matcotools.com/ecatalog/preview2/img/review-sprite.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 18px',
    height:20,
    width: 90,
    backgroundPosition:'-54px 0px',
  },
  rating2: {
    backgroundImage: 'url(https://www.matcotools.com/ecatalog/preview2/img/review-sprite.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 18px',
    height:20,
    width: 90,
    backgroundPosition:'-242px 0px',
  },
  rating2h: {
    backgroundImage: 'url(https://www.matcotools.com/ecatalog/preview2/img/review-sprite.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 18px',
    height:20,
    width: 90,
    backgroundPosition:'-36px 0px',
  },
  rating3: {
    backgroundImage: 'url(https://www.matcotools.com/ecatalog/preview2/img/review-sprite.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 18px',
    height:20,
    width: 90,
    backgroundPosition:'-224px 0px',
  },
  rating3h: {
    backgroundImage: 'url(https://www.matcotools.com/ecatalog/preview2/img/review-sprite.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 18px',
    height:20,
    width: 90,
    backgroundPosition:'-18px 0px',
  },
  rating4: {
    backgroundImage: 'url(https://www.matcotools.com/ecatalog/preview2/img/review-sprite.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 18px',
    height:20,
    width: 90,
    backgroundPosition:'-206px 0px',
  },
  rating4h: {
    backgroundImage: 'url(https://www.matcotools.com/ecatalog/preview2/img/review-sprite.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 18px',
    height:20,
    width: 90,
    backgroundPosition:'0px 0px',
  },
  rating5: {
    backgroundImage: 'url(https://www.matcotools.com/ecatalog/preview2/img/review-sprite.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 18px',
    height:20,
    width: 90,
    backgroundPosition:'-188px 0px',
  },
};

const sortMap = {
  descDirection:{"name":"sortDirection", "value":"desc"},
  ascDirection:{"name":"sortDirection", "value":"asc"},
  priceType:{"name":"sortType", "value":"price"},
  ratingType:{"name":"sortType", "value":"rating"},
  newType:{"name":"sortType", "value":"created"},
  relevanceType:{"name":"sortType", "value":"relevance"},

  sortSelections:[
      {call:[this.newType,this.descDirection], type:"Newest Arrivals"},
      {call:[this.relevanceType, this.descDirection], type:"Relevance"},
      {call:[this.priceType,this.descDirection], type:"Price: High to Low"},
      {call:[this.priceType,this.ascDirection], type:"Price: Low to High"},
      {call:[this.ratingType,this.descDirection], type:"Rating: High to Low"},
      {call:[this.ratingType,this.ascDirection], type:"Rating: Low to High"}
    ]
}



function findSortModel() {
  var direction = 0;
  var type = 0;
  var criteria = dataCriteria;
  for(var i = 0; i  < criteria.length; i++){
    if(criteria[i].name === 'sortDirection'){
      if(criteria[i].value === 'asc'){
        direction = 1;
      }
    }
    if(criteria[i].name === 'sortType'){
      if(criteria[i].value === 'rating'){
        type = 4;
      }
      if(criteria[i].value === 'price'){
        type = 2;
      }
      if(criteria[i].value === 'relevance'){
        type = 1;
      }
    }
  }
  return direction + type;
}


class Home extends Component {
  state = {
     left: false,
     value: 0,
     comparisons: [],
     sortSelection: sortMap.sortSelections[findSortModel()].type,
   };

  factorRating = (rating) =>{
    var ratingClass = 'rating0';
    var seed = 0.00;
    if(rating != null && rating != 0){
      for(var i = 0; i < 10; i++){
        if(rating > seed && rating <= seed + 0.50){
          var solveBy = seed/0.50;
          if(solveBy % 2){
            ratingClass = 'rating'+Math.round(seed);
          }else {
            ratingClass = 'rating'+Math.round(seed)+'h';
          }
        }
        seed = seed + 0.50;
      }
    }
    return ratingClass;
  }

   toggleDrawer = (side, open) => () => {
     this.setState({
       [side]: open,
     });
   };
   isMobile(){
     const screenSize = window.innerWidth;
     return screenSize < 800 ? true: false;
   }

   handleFilterChange = (facetIndex, optionIndex) => {
     console.log('filter change', facetIndex, optionIndex, dataFacets);
     dataFacets[facetIndex].options[optionIndex].enabled = !dataFacets[facetIndex].options[optionIndex].enabled;
     //TODO call request and pass in correct facets above.
   }
   handleClearAllFilter = () => {
     console.log('clear all filter')
   }
   handleSortChange = (event) => {
     console.log('sort',event.target.value )
     this.setState({ sortSelection: event.target.value })
   }
   handleTabChange = (event, value) => {
     console.log('tab fire', value)
      this.setState({ value });
    };
    handleCompareChange = name => event => {
      console.log(this.isComparing(name))
      if(this.isComparing(name)){
        this.setState({comparisons: this.state.comparisons.filter(function(id) {
            return id !== name
        })});
        console.log(this.state.comparisons)
      }else if(!this.isMobile()){
        if(this.state.comparisons.length < TEMP_ALLOWED_COMPARE_DESK){
          this.setState({ comparisons: [...this.state.comparisons, name] });
          console.log(this.state.comparisons)
        }
      }else{
        if(this.state.comparisons.length < TEMP_ALLOWED_COMPARE_MOBILE){
          this.setState({ comparisons: [...this.state.comparisons, name] });
          console.log(this.state.comparisons)
        }
      }
    };
    isComparing(itemId){
      return this.state.comparisons.includes(itemId);
    }
    itemsImage(images, type, size){
      if(images === null || !images.length){
        return <div>No image</div>
      }
      return images.map(image => {
        if(image.type === type && image.size === size){
         return image.location
        }
      }).join('');
    }


   render() {
     const { classes, value } = this.props;

     return (
       <div>
        <Topbar
          categoryName={dataCategory.name}
          toggleDrawer={this.toggleDrawer('left', true)}
          img={require('../img/matLogo.png')}
         />
        <BreadCrumbs categoryData={dataCategory}  />
         <ItemsContainer>
            <ResponsiveDrawer
              open={this.state.left}
              onClose={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
              onClickClearAll={this.handleClearAllFilter}
              tabsValue={this.state.value}
              tab1Title='CATEGORIES'
              tab2Title='FILTERS'
              handleTabChange={this.handleTabChange}
              sortSelection={this.state.sortSelection}
              onSortChange={this.handleSortChange}
              filterSortMap={sortMap}
              filterList={dataFacets}
              facetHandleChange={this.handleFilterChange}
              sideListCategories={dataCategory.subCategories}

            />
           <div className={classes.gridColumn}>
             <div  className={classes.gridRoot}>
               <Grid container spacing={8}>
                 {dataProducts.map(product => (
                   <Grid key={product.catalogNumber} item xs={6} sm={3} lg={2} xl={2}>
                     <Card className={classes.card}>
                       <List className={classes.badgeContainer}>
                         {product.badges.map(badge =>(
                           <ListItem className={classes.badgeListItem} key={badge.color.toString()}>
                             <div style={{backgroundColor: badge.color }} className={classes.badgeListText}>{badge.name}</div>
                           </ListItem>
                         ))}
                       </List>
                         <CardMedia
                           className={classes.media}
                           image={this.itemsImage(product.images, 'PrimaryImage', 'profile-low')}
                         />
                         <CardContent className={classes.cardContent}>
                           <div className={classes[this.factorRating(product.rating)]}></div>
                           <Typography color={'primary'} gutterBottom variant="subheading" component="h3">
                             {product.catalogNumber}
                           </Typography>
                           <Typography component="p">
                             {product.prices[0].value}
                           </Typography>
                           <Typography component="p" color='textSecondary'>
                             {product.title}
                           </Typography>
                         </CardContent>
                         <CardActions>
                           <FormGroup row>
                             <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={this.isComparing(product.catalogNumber)}
                                    onChange={this.handleCompareChange(product.catalogNumber)}
                                    value={product.catalogNumber}
                                    color="primary"
                                  />
                                }
                                label='COMPARE'
                              />
                           </FormGroup>
                         </CardActions>
                       </Card>
                     </Grid>
                     ))}
                   </Grid>
               </div>
             </div>
           </ItemsContainer>
         </div>
     );
   }
 }


export default withStyles(styles)(Home);
