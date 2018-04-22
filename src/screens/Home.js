import React, { Component } from 'react';
import PropTypes from 'react';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
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
import CancelIcon from '@material-ui/icons/Cancel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Sort from '../components/Sort/Sort';
import Facets from '../components/Facets/Facets';



const dataProducts = require('../data-test/itemsCall.json').products;
const dataCategory = require('../data-test/itemsCall.json').category;
const dataCriteria = require('../data-test/itemsCall.json').criteria;
const dataFacets = require('../data-test/itemsCall.json').facets;
const getKeyword = function(){}
const dataKeyword = require('../data-test/itemsCall.json').criteria;

const TEMP_SCREENSIZE = 1200;
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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  flex: {
    flex: 1,
  },
  list: {
    width: '99%',
  },
  fullList: {
    width: 'auto',
  },
  container: {
  display: 'flex',
  flexWrap: 'wrap',
},
bootstrapInput: {
    backgroundColor: '#ffffff',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: '100%',
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  stretch: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 2,
    paddingRight: 4,
    width: '100%',
  },
  input:{
    width:'70%',
  },
  searchIcon: {
    color: '#ffffff',
  },
  cardContainer: {
    flexDirections: 'row',
  },
  card: {
    paddingTop:16,
  },
  cardContent: {
    height: 78,
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
  drawer: {
    minWidth: 280,
  },
  title: {
    minWidth:124,
    width: '25%',
  },
  CategoryButton: {
    height: 42,
    padding: 4,
    width: '100%',
    maxWidth: 300,
  },
  appBarSub: {
    height: 36,
    top: 64,
    overflow: 'auto',
  },
  appBarSubToolbar: {
    minHeight: 36,
    fontSize: 14,
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
  breadCrumbItem:{
    paddingLeft: 6,
    cursor: 'default',
    whiteSpace: 'nowrap',
    overflow: 'visible',
  },
  filterPanel: {
    maxWidth: 300,
  },
  doneIcon: {
    color: 'action',
    paddingRight: 8,
    marginLeft: -8,
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



function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 4 }}>
      {props.children}
    </Typography>
  );
}

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
     return TEMP_SCREENSIZE < 700 ? true: false;
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
    generateCategoriesList(classes) {
      return dataCategory.subCategories.map(subCat =>
        <ListItem key={subCat.categoryId} className={classes.stretch}>
          <Button style={{backgroundColor: subCat.color }} className={classes.stretch} variant="raised" color="primary">
            {subCat.name}
          </Button>
        </ListItem>
      );
    }
    generateBreadcrumbList(classes) {
      return dataCategory.superCategories.map(supCat =>
        <Typography className={classes.breadCrumbItem} key={supCat.categoryId} variant="subheading" color="textSecondary">
          > {supCat.name}
        </Typography>
      );
    }


   render() {
     const { classes, value } = this.props;

     const sideList = (
       <div className={classes.list}>
          <div className={classes.demo}>
            <List className={classes.stretch}>
              {this.generateCategoriesList(classes)}
            </List>
          </div>
       </div>
     );

     const filters = (
       <div className={classes.list, classes.filterPanel}>
          <div className={classes.demo}>
            <List className={classes.stretch}>
              <ExpansionPanel defaultExpanded={true}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Sort by</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Sort
                    sortSelection={this.state.sortSelection}
                    onSortChange={this.handleSortChange}
                    sortMap={sortMap}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel defaultExpanded={true}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Filter by Attributes</Typography>
                  <Button onClick={this.handleClearAllFilter}>Clear All</Button>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Facets
                    filterList={dataFacets}
                    handleChange={this.handleFilterChange}
                    classes={classes}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </List>
          </div>
       </div>

      );

     return (
       <div>
         <AppBar className={classes.appBar} position="sticky">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex, classes.title}>
              Matco Tools
            </Typography>
            <Button className={classes.CategoryButton} variant="raised" color="primary">
              {dataCategory.name}
            </Button>
            <TextField
              className={classes.input}
                placeholder="Search Catalog"
                id="bootstrap-input"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.bootstrapFormLabel,
                }}
              />
              <IconButton className={classes.searchIcon} aria-label="Delete">
                <SearchIcon />
              </IconButton>
          </Toolbar>
        </AppBar>
        <AppBar className={classes.appBarSub} position="fixed" color='inherit'>
          <Toolbar className={classes.appBarSubToolbar}>
            <Typography className={classes.breadCrumbItem} variant="subheading" color="textSecondary">
              Matco ECatalog
            </Typography>{this.generateBreadcrumbList(classes)}
          </Toolbar>
        </AppBar>
         <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
           <div
             className={classes.drawer}
             tabIndex={0}
             role="button"
             onKeyDown={this.toggleDrawer('left', false)}
           >
             <Paper className={classes.root}>
                <Tabs
                  className={classes.tab}
                  value={this.state.value}
                  onChange={this.handleTabChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="CATEGORIES" />
                  <Tab label="FILTERS" />
                </Tabs>
              </Paper>
              {this.state.value === 0 && <TabContainer className={classes.stretch}>{sideList}</TabContainer>}
              {this.state.value === 1 && <TabContainer>{filters}</TabContainer>}
           </div>
         </Drawer>
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
     );
   }
 }


export default withStyles(styles)(Home);
